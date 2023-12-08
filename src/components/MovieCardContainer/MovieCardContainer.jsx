import { useEffect, useState } from "react";
import { Pagination, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from '@react-hook/media-query';
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

    const isSmallScreen = useMediaQuery('(max-width: 600px)');
    const isMediumScreen = useMediaQuery('(min-width: 601px) and (max-width: 990px)');
    const isLargeScreen = useMediaQuery('(min-width: 991px) and (max-width: 1200px)');
    const isExtraLargeScreen = useMediaQuery('(min-width: 1201px)');
  
    const getSlidesPerView = () => {
        if (isSmallScreen) return 3;
        if (isMediumScreen) return 4;
        if (isLargeScreen) return 6;
        if (isExtraLargeScreen) return 8;
        return 8
      };

    return (
        <Swiper
            slidesPerView={getSlidesPerView()}
            spaceBetween={20}
            freeMode={true}
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            style={{ padding: "5px", paddingBottom: "30px" }}
        >
            {
                topRatedMovies.map(topRatedMovie => (
                    <SwiperSlide key={topRatedMovie.id} style={{ backgroundColor: "#0000000d", boxShadow: "0.3em 0.3em 0.7em #00000015", borderRadius: "10px", padding: "10px" }}>
                        <MovieCard movieCard={topRatedMovie} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default MovieCardContainer