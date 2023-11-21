import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext"

const Navbar = () => {

    const { logOut } = useContext(AuthContext)

    const [search, setSearch] = useState('')
    
    const history = useNavigate()

    const inputChange = (e) => {
        setSearch(e.target.value)
    }

    const submit = (e) => {
        e.preventDefault()
        history(`/search/${search}`)
        setSearch('')
    }

    const cerrar = async () => {
        await logOut()
    }

    return (
        <nav style={{ padding: "20px", background: "#c4c4c4", display:"flex", justifyContent:"space-between" }}>
            <Link to={'/'}>inicio</Link>
            <form onSubmit={submit}>
                <input type="text" value={search} onChange={inputChange} />
            </form>
            <button onClick={cerrar}>cerrar sesion</button>
        </nav>
    )
}

export default Navbar