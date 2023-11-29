import PrivateRoute from '../PrivateRoute/PrivateRoute'
import MovieBannerContainer from '../MovieBannerContainer/MovieBannerContainer'
import MovieCardContainer from '../MovieCardContainer/MovieCardContainer'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { bd } from '../../firebase/firebase'
import { collection, getDoc, setDoc, doc } from 'firebase/firestore'

const Home = () => {
  const { userLogin } = useContext(AuthContext)
  const documentRef = userLogin ? doc(collection(bd, 'usuarios'), userLogin.uid) : null

  const newUser = async () => {
    const docSnapshot = await getDoc(documentRef)
    !docSnapshot.exists() && await setDoc(documentRef, { favorites: [] })
  }

  useEffect(() => {
    userLogin !== null && newUser()
  }, [userLogin])

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