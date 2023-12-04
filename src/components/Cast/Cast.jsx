import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import options from '../../config/apiOptions';

const Cast = ({ id }) => {
    const [cast, setCast] = useState([]);
    const [mostrarTodos, setMostrarTodos] = useState(false);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=es-MX`, options)
            .then(response => response.json())
            .then(response => setCast(response.cast))
            .catch(err => console.error(err));
    }, [id]);

    const actoresMostrados = mostrarTodos ? cast : cast.slice(0, 5);

    return (
        <>
            {actoresMostrados.map(actor => actor.name).join(', ')}
            {cast.length > 5 && (
                <Button
                    variant=""
                    size="sm"
                    onClick={() => setMostrarTodos(!mostrarTodos)}
                >
                    {mostrarTodos ? "Ver Menos" : "Ver Más"}
                </Button>
            )}
        </>
    );
};

export default Cast;
