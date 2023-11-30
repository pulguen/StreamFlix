import { Link } from "react-router-dom"
import { MdFavoriteBorder } from "react-icons/md";
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
        <div style={{ position: "relative" }}>
            <Link to={`movie/${movieCard.id}`}>
                <img
                    style={{ width: "100%", height: "auto" }}
                    src={`https://image.tmdb.org/t/p/w220_and_h330_face${movieCard.poster_path}`}
                    alt=""
                />
            </Link>
            <p>{movieCard.title}</p>
            {
                favorite ? (
                    <MdFavorite
                        onClick={() => { deleteF(movieCard.id) }}
                        className="icon"
                        style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '30px', color: 'red' }}
                    />
                ) : (
                    <MdFavoriteBorder
                        onClick={addF}
                        className="icon"
                        style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '30px', color: 'red' }}
                    />
                )
            }
        </div>
    )
}

export default MovieCard