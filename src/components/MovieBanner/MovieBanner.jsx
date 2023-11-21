import { Link } from 'react-router-dom'
import './movieBanner.css'

const MovieBanner = ({ movieBanner }) => {

    return (
        <div className='banner'>
            <h1 className='categoryTitle'>Peliculas Populares</h1>
            <h2 className='bannerTitle'>{movieBanner.title}</h2>
            <p className='bannerDescription'>{movieBanner.overview}</p>
            <Link to={`movie/${movieBanner.id}`} className='bannerButton'>ver</Link>
        </div>
    )
}

export default MovieBanner