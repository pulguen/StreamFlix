import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import options from '../../config/apiOptions'

const Recommendations = ({ recommendationsId }) => {

    const [recommendationsMovies, setRecommendationsMovies] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${recommendationsId}/recommendations?language=es-MX&page=1`, options)
            .then(response => response.json())
            .then(response => setRecommendationsMovies(response.results))
            .catch(err => console.error(err));
    }, [recommendationsId])

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    return (
        <div>
            <p>Recomendaciones:</p>
            {
                recommendationsMovies.slice(0,10).map((recommendationsMovie, index) =>
                    <Link key={index} to={`../movie/${recommendationsMovie.id}`} onClick={handleClick}>
                        <img src={`https://image.tmdb.org/t/p/w94_and_h141_bestv2${recommendationsMovie.poster_path}`} alt="" />
                    </Link>)
            }
        </div >
    )
}

export default Recommendations