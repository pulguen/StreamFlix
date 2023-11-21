import { createContext, useEffect, useState } from "react";
import { auth } from '../firebase/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth"

export const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [userLogin, setUserLogin] = useState(null)
    const [authChecked, setAuthChecked] = useState(false);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUserLogin(user)
            setAuthChecked(true)
        })
        return () => unSubscribe 
    }, [])

    //registro
    const registerEmail = async (nombre, email, pass) => {
        const response = await createUserWithEmailAndPassword(auth, email, pass)
        updateProfile(response.user, { displayName: nombre })
    }

    //login
    const loginEmail = async (email, pass) => {
        await signInWithEmailAndPassword(auth, email, pass)
    }

    //cerrar
    const logOut = () => {
        signOut(auth)
    }

    return(
        <AuthContext.Provider
        value={{
            userLogin,
            authChecked,
            loginEmail,
            registerEmail,
            logOut
        }}>
            {children}
        </AuthContext.Provider>
    )

}
