import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { FavoritesProvider } from './context/FavoritesContext';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Favorites from './components/Favorites/Favorites';
import MovieDetails from './components/MovieDetails/MovieDetails'
import SearchResults from './components/SearchResults/SearchResults';
import Footer from './components/Footer/Footer';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function App() {
  return (
    <AuthProvider>
      <FavoritesProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/*' element={<Home />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/favorites' element={<Favorites />} />
            <Route exact path='/movie/:id' element={<MovieDetails />} />
            <Route exact path='/search/:search' element={<SearchResults />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </FavoritesProvider>
    </AuthProvider>
  );
}

export default App;
