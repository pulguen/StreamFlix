import PrivateRoute from '../PrivateRoute/PrivateRoute'
import MovieBannerContainer from '../MovieBannerContainer/MovieBannerContainer'
import MovieCardContainer from '../MovieCardContainer/MovieCardContainer'

const Home = () => {
  return (
    <PrivateRoute>
      <div>
        <MovieBannerContainer />
        <h2>Pelis mejor valoradas</h2>
        <MovieCardContainer />
      </div>
    </PrivateRoute>

  )
}

export default Home