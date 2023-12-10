import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap'; // Agrega esta línea
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Cast from '../Cast/Cast';
import Recommendations from '../Recommendations/Recommendations';
import options from '../../config/apiOptions';
import './movieDetails.css';
import Loading from '../Loading/Loading';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=es-MX`, options)
      .then(response => response.json())
      .then(response => setMovie(response))
      .catch(err => console.error(err))
      .finally(() => setCargando(false));
  }, [id]);

  const obtenerAñoEstreno = () => {
    if (movie.release_date) {
      return movie.release_date.substring(0, 4); // Obtener los primeros cuatro caracteres (el año)
    }
    return 'N/A'; // valor predeterminado si la fecha de estreno no está disponible
  };

  return (
    <PrivateRoute>
      {cargando ? (
        <Loading/>
      ) : (
        <>
          <div
            style={{ backgroundImage: `url("https://image.tmdb.org/t/p/w1280${movie.backdrop_path}")` }}
            className="bannerDetails"
          >
          <Container>
            <Row className="d-flex align-items-center">
              <Col md={6} >
                <h4 className='text-white mt-3'>Película</h4>
                <h2 className='bannerTitle mt-2'>{movie.title}</h2>
                <Button variant="primary" className='btn btn-primary mt-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-play-circle-fill me-2" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
                  </svg>          
                  <span className="boton-reproducir">Reproducir</span>
                </Button>
              </Col>
              <Col md={6} className="text-md-end mt-2 mb-2">
                <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt={movie.title} />
              </Col>
            </Row>
          </Container>

          </div>

          <Container className="mt-4">
            <Row>
              <Col md={6}>
                <div className='año-duracion'>
                <p>{obtenerAñoEstreno()}</p>
                <p>{movie.runtime} minutos</p>
                </div>
                <div>
                  <p>{movie.adult ? 'Para adultos' : 'Para todo público'}</p>
                </div>
                <p>Puntuación de usuario: {movie.vote_average}/10</p>
                <p>cantidad de votos: {movie.vote_count}</p>
                <p>{movie.overview}</p>
                <p>Género: {movie.genres.map(genero => genero.name).join(', ')}</p>

              </Col>
              <Col md={6}>
                <Card>
                  <Card.Body>
                    <Card.Title>Elenco</Card.Title>
                    <Card.Text>
                      <Cast id={movie.id} />
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="mt-3">
                  <Card.Body>
                    <Card.Title>Recomendaciones</Card.Title>
                      <Recommendations recommendationsId={movie.id} />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </PrivateRoute>
  );
};

export default MovieDetails;
