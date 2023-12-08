import { Link } from "react-router-dom"
import { MdFavorite } from "react-icons/md";
import { useContext, useState, useEffect } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import './MovieCard.css'

const MovieCard = ({ movieCard }) => {

    const { addFavorite, deleteFavorite, arrayfavorites } = useContext(FavoritesContext)
    const [favorite, setFavorite] = useState(false)

    const addF = () => {
        addFavorite(movieCard.id, movieCard.title, `https://image.tmdb.org/t/p/w94_and_h141_bestv2${movieCard.poster_path}`, 'movie')
        setFavorite(true)
    }

    const deleteF = async (id) => {
        await deleteFavorite(id)
        setFavorite(false)
    }

    useEffect(() => {
        const getArray = async () => {
            try {
                const favoritesData = await arrayfavorites()
                const isFavorite = favoritesData.some(favorite => favorite.id === movieCard.id)
                setFavorite(isFavorite)
            } catch (error) {
                console.log(error);
            }
        }
        getArray()
    }, [arrayfavorites, movieCard.id])


    return (
        <div>
            <Link to={`movie/${movieCard.id}`}>
                <img
                    style={{ position: "relative", width: "100%", borderRadius: "10px 70px 10px 10px" }}
                    src={`https://image.tmdb.org/t/p/w220_and_h330_face${movieCard.poster_path}`}
                    alt=""
                />
            </Link>
            <p>{movieCard.title}</p>
            <MdFavorite
                className="icon"
                onClick={favorite ? () => deleteF(movieCard.id) : addF}
                style={{ color: favorite ? "#ff0101" : "#a8a8a8" }}
            />
        </div>
    )
}

export default MovieCard