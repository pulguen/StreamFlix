import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const MyNavbar = () => {
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
    <Navbar bg="body-tertiary" expand="lg" style={{ marginLeft: '20px', marginRight: '20px' }}>
      <Navbar.Brand as={Link} to="/">StreamFlix</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/" className="active">Home</Nav.Link>
          <Nav.Link as={Link} to="/link">Películas</Nav.Link>
          <Nav.Link as={Link} to="/link">Series</Nav.Link>
          <NavDropdown title="Perfil" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/action">Editar Perfil</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/another-action">Mi Lista</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} onClick={cerrar}>Cerrar Sessión</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="#" disabled>Novedades</Nav.Link>
        </Nav>
        <Form className="d-flex" role="search"  onSubmit={submit}>
          <FormControl type="search" placeholder="Buscar por nombre" className="me-2" aria-label="Buscar" onChange={inputChange}/>
          <Button variant="outline-success" type="submit" >Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default MyNavbar;