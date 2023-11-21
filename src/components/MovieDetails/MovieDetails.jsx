import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import Cast from '../Cast/Cast'
import Recommendations from '../Recommendations/Recommendations'
import options from '../../config/apiOptions'
import './movieDetails.css'

const MovieDetails = () => {

    const [movie, setMovie] = useState([])
    const [cargando, setCargando] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?language=es-MX`, options)
            .then(response => response.json())
            .then(response => setMovie(response))
            .catch(err => console.error(err))
            .finally(() => setCargando(false))
    }, [id])

    return (
        <PrivateRoute>
            {cargando
                ?
                <h1>cargando...</h1>
                :
                <>
                    <div style={{ backgroundImage: `url("https://image.tmdb.org/t/p/w1280${movie.backdrop_path}")`, height: "450px" }}
                        className='bannerDetails'>
                        <h2>{movie.title}</h2>
                        <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt=""></img>
                    </div>
                    <div>
                        <p>año de estreno: {movie.release_date}</p>
                        <p>genero: {movie.genres.map(genero => genero.name).join(', ')}</p>
                        <p>duracion: {movie.runtime} minutos</p>
                        <p>descripcion: {movie.overview}</p>
                        <p>puntuacion de usuario: {movie.vote_average}/10</p>
                        <p>elenco: <Cast id={movie.id} /></p>
                        <Recommendations recommendationsId={movie.id} />
                    </div>
                </>
            }
        </PrivateRoute>
    )
}

export default MovieDetails