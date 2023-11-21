import { useState, useEffect } from "react";
import options from '../../config/apiOptions'

const Cast = ({ id }) => {
    const [cast, setCast] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=es-MX`, options)
            .then(response => response.json())
            .then(response => setCast(response.cast))
            .catch(err => console.error(err));
    }, [id])

    return (
        <>
            {cast.map(actor => actor.name).join(', ')}
        </>
    )
}

export default Cast