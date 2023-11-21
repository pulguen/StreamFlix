import { useContext, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext"

const Register = () => {

  const { registerEmail, userLogin } = useContext(AuthContext)

  const [nameRegister, setNameRegister] = useState("")
  const [emailRegister, setEmailRegister] = useState("")
  const [passRegister, setPassRegister] = useState("")
  
  const navigate = useNavigate()
  
  const registrar = async (e) => {
    e.preventDefault()
    await registerEmail(nameRegister, emailRegister, passRegister)
    navigate("/")
  }

  return (
    userLogin ? (
      <h1>ya estoy registrado</h1 >
    ) : (
      <div>
        <h2>nuevo usuario</h2>
        <form style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px" }}>
          <div>
            <label>nombre</label>
            <input onChange={(e) => setNameRegister(e.target.value)} type="text" />
          </div>
          <div>
            <label>email</label>
            <input onChange={(e) => setEmailRegister(e.target.value)} type="email" />
          </div>
          <div>
            <label>contraseña</label>
            <input onChange={(e) => setPassRegister(e.target.value)} type="password" />
          </div>
          <div>
            <button onClick={(e) => registrar(e)}>confirmar</button>
          </div>
        </form>
      </div>)
  )
}

export default Register