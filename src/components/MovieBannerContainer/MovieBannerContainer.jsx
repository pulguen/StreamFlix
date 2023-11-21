import { useState, useEffect } from "react"
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import MovieBanner from '../MovieBanner/MovieBanner'
import options from '../../config/apiOptions'
import './movieBannerContainer.css'

const MovieBannerContainer = () => {

    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?language=es-Mx&page=1', options)
            .then(response => response.json())
            .then(response => setPopularMovies(response.results))
            .catch(err => console.error(err));
    }, [])

    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            {popularMovies.map(popularMovie =>
                <SwiperSlide key={popularMovie.id}
                    style={{ backgroundImage: `url("https://image.tmdb.org/t/p/w1280${popularMovie.backdrop_path}")` }}
                    className="containerBanner">
                    <MovieBanner movieBanner={popularMovie} />
                </SwiperSlide>
            )}
        </Swiper>
    )
}

export default MovieBannerContainer