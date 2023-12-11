import React, { useEffect, useContext, useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FavoritesContext } from '../../context/FavoritesContext';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Loading from '../Loading/Loading';
import Swal from 'sweetalert2'; // Importa SweetAlert2

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
      await deleteFavorite(id);
      const updatedFavorites = await getFavorites();
      setFavorites(updatedFavorites);

      // Mostrar SweetAlert2 después de eliminar
      Swal.fire({
        icon: 'success',
        title: 'Eliminado',
        text: 'La película se eliminó de favoritos con éxito.',
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (error) {
      console.log(error);

      // Mostrar SweetAlert2 en caso de error
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error al eliminar la película de favoritos.',
      });
    }
  };

  return (
    <PrivateRoute>
      <Container>
        <Row className="justify-content-md-center">
          {loading ? (
            <Loading />
          ) : (
            favorites.map((favorite) => (
              <Col key={favorite.id} md={4}>
                <Card style={{ width: '18rem', margin: '10px' }}>
                  <Card.Img variant="top" src={favorite.img} alt={favorite.name} className="img-thumbnail" />
                  <Card.Body>
                    <Card.Title>{favorite.name}</Card.Title>
                    <Button variant="danger" onClick={() => deleteF(favorite.id)}>
                      Borrar
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </PrivateRoute>
  );
};

export default Favorites;
