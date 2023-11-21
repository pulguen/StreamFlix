import { Link } from "react-router-dom"

const MovieCard = ({ movieCard }) => {

    return (
        <Link to={`movie/${movieCard.id}`}>
            <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${movieCard.poster_path}`} alt=""></img>
        </Link>
    )
}

export default MovieCard