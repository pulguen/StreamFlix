import { createContext, useContext } from "react";
import { bd } from '../firebase/firebase'
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { AuthContext } from './AuthContext'

export const FavoritesContext = createContext()

export const FavoritesProvider = ({ children }) => {

    const { userLogin } = useContext(AuthContext)
    const userId = userLogin ? userLogin.uid : null

    const favoritesCollection = collection(bd, 'usuarios')

    const arrayfavorites = async () => {
        const data = await getDocs(favoritesCollection)
        const favoritesArray = data.docs.map((docu) => ({ ...docu.data(), id: docu.id }))
        const usuarioData = favoritesArray.find(usuario => usuario.id === userId)
        return usuarioData.favorites
    }

    const addFavorite = async (id, name, img, category) => {
        const userDocRef = doc(favoritesCollection, userId)
        const data = await getDocs(favoritesCollection)
        const favoritesArray = data.docs.map((docu) => ({ ...docu.data(), id: docu.id }))
        const usuarioData = favoritesArray.find(usuario => usuario.id === userId)
        await updateDoc(userDocRef, { favorites: [...usuarioData.favorites, { id: id, name: name, img: img, category: category }] });
    }

    const deleteFavorite = async (id) => {
        const userDocRef = doc(favoritesCollection, userId)
        const data = await getDocs(favoritesCollection)
        const favoritesArray = data.docs.map((docu) => ({ ...docu.data(), id: docu.id }))
        const usuarioData = favoritesArray.find(usuario => usuario.id === userId)
        const filterFavorite = usuarioData.favorites.filter(fav => fav.id !== id)
        await updateDoc(userDocRef, { favorites: filterFavorite })
    }

    const getFavorites = async () => {
        try {
            const data = await getDocs(favoritesCollection)
            const favoritesArray = data.docs.map((docu) => ({ ...docu.data(), id: docu.id }))
            const usuarioData = favoritesArray.find(usuario => usuario.id === userId)
            const favoritesData = usuarioData ? usuarioData.favorites : [];
            return favoritesData
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <FavoritesContext.Provider
            value={{
                addFavorite,
                deleteFavorite,
                getFavorites,
                arrayfavorites
            }}>
            {children}
        </FavoritesContext.Provider>
    )
}