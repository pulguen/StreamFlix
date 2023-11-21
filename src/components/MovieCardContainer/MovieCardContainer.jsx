import { useEffect, useState } from "react";
import { Pagination, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import MovieCard from "../MovieCard/MovieCard";
import options from '../../config/apiOptions'

const MovieCardContainer = () => {

    const [topRatedMovies, setTopRatedMovies] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/top_rated?language=es-MX&page=1', options)
            .then(response => response.json())
            .then(response => setTopRatedMovies(response.results))
            .catch(err => console.error(err));
    }, [])
    
    return (
        <Swiper
            slidesPerView={6}
            spaceBetween={30}
            freeMode={true}
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode, Pagination]}
        >
            {
                topRatedMovies.map(topRatedMovie => (
                    <SwiperSlide key={topRatedMovie.id} >
                        <MovieCard movieCard={topRatedMovie} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default MovieCardContainer