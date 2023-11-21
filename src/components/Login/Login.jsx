import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const Login = () => {

    const { loginEmail, userLogin } = useContext(AuthContext)

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")


    const loguearse = async (e) => {
        e.preventDefault()
        await loginEmail(email, pass)
        navigate("/")
    }

    return (
        userLogin ? (
            <h1>ya estoy logueado</h1>
        ) : (
            <div>
                <h2>iniciar sesion</h2>
                <form style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px" }}>
                    <div>
                        <label>email</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" />
                    </div>
                    <div>
                        <label>contraseña</label>
                        <input onChange={(e) => setPass(e.target.value)} type="password" />
                    </div>
                    <div>
                        <button onClick={(e) => loguearse(e)}>iniciar sesion</button>
                    </div>
                </form>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <p>no tenes cuenta?</p>
                    <Link to={'/register'}>Registrate</Link>
                </div>
            </div>)
    )
}

export default Login