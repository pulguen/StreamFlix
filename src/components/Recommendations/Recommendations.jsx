import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import options from '../../config/apiOptions';

const Recommendations = ({ recommendationsId }) => {
    const [recommendationsMovies, setRecommendationsMovies] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${recommendationsId}/recommendations?language=es-MX&page=1`, options)
            .then(response => response.json())
            .then(response => setRecommendationsMovies(response.results))
            .catch(err => console.error(err));
    }, [recommendationsId]);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="d-flex flex-wrap">
            {recommendationsMovies.slice(0, 10).map((recommendationsMovie, index) => (
                <Link key={index} to={`../movie/${recommendationsMovie.id}`} onClick={handleClick}>
                    <Card style={{ width: '5rem', margin: '2px' }}>
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${recommendationsMovie.poster_path}`} alt="pelicula recomendada" />
                    </Card>
                </Link>
            ))}
        </div>
    );
};

export default Recommendations;
