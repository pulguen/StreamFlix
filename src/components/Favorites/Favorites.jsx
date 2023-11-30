import { useEffect, useContext, useState } from "react"
import { FavoritesContext } from "../../context/FavoritesContext";

const Favorites = () => {
  const { getFavorites } = useContext(FavoritesContext);
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


  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div>
          {favorites.map(favorite => (
            <div key={favorite.id}>
              <p>Nombre: {favorite.name}</p>
              <img src={favorite.img} alt="" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;

