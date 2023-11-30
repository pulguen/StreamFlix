import { Link } from "react-router-dom"
import { MdFavoriteBorder } from "react-icons/md";
import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import './MovieCard.css'

const MovieCard = ({ movieCard }) => {

    const { addFavorites } = useContext(FavoritesContext)

    const toggleFavorite = () => {
        addFavorites(movieCard.id, movieCard.title, `https://image.tmdb.org/t/p/w94_and_h141_bestv2${movieCard.poster_path}`, 'movie')
    }

    return (
        <div style={{ position: "relative" }}>
            <Link to={`movie/${movieCard.id}`}>
                <img
                    style={{ width: "100%", height: "auto" }}
                    src={`https://image.tmdb.org/t/p/w220_and_h330_face${movieCard.poster_path}`}
                    alt=""
                />
            </Link>
            <p>{movieCard.title}</p>
            <MdFavoriteBorder
                onClick={toggleFavorite}
                className="icon"
                style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '30px' }}
            />
        </div>
    )
}

export default MovieCard