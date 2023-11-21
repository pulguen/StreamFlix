import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import options from '../../config/apiOptions'

const SimilarMovie = ({ similar }) => {

    const [similarMovies, setSimilarMovies] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${similar}/recommendations?language=es-MX&page=1`, options)
            .then(response => response.json())
            .then(response => setSimilarMovies(response.results))
            .catch(err => console.error(err));
    }, [similar])

    return (
        <div>
            {
                similarMovies.map((similarMovie, index) =>
                    <Link key={index} to={`../movie/${similarMovie.id}`} >
                        <img src={`https://image.tmdb.org/t/p/w94_and_h141_bestv2${similarMovie.poster_path}`} alt="" />
                    </Link>)
            }
        </div >
    )
}

export default SimilarMovie