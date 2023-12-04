import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './movieBanner.css';

const MovieBanner = ({ movieBanner }) => {
  return (
    <div className='banner'>
      <h1 className='categoryTitle'>Peliculas Populares</h1>
      <h2 className='bannerTitle'>{movieBanner.title}</h2>
      <p className='bannerDescription'>{movieBanner.overview}</p>      

      <Link to={`movie/${movieBanner.id}`}>
        <Button variant="primary" className='btn btn-primary'>
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-play-circle-fill me-2" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
          </svg>          
          <span class="boton-reproducir">Reproducir</span>
        </Button>
      </Link>
    </div>
  );
}

export default MovieBanner;
