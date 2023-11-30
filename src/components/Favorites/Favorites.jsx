import { useEffect, useContext, useState } from "react"
import { FavoritesContext } from "../../context/FavoritesContext";

const Favorites = () => {
  const { getFavorites, deleteFavorite } = useContext(FavoritesContext);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const favoritesData = await getFavorites();
        setFavorites(favoritesData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [getFavorites]);

  const deleteF = async (id) => {
    try {
      await deleteFavorite(id)
      const updatefavorite = await getFavorites()
      setFavorites(updatefavorite)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div>
          {favorites.map(favorite => (
            <div key={favorite.id}>
              <p>{favorite.name}</p>
              <img src={favorite.img} alt="" />
              <button onClick={() => { deleteF(favorite.id) }}>Borrar</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;

