import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthContext';

const MyNavbar = () => {
  const { logOut } = useContext(AuthContext);
  const history = useNavigate();
  const [search, setSearch] = useState('');

  const inputChange = (e) => {
    setSearch(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    history(`/search/${search}`);
    setSearch('');
  };

  const cerrar = async () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Se cerrará tu sesión actual.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cerrar sesión',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await logOut();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Has cerrado sesión exitosamente',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <Navbar bg="body-tertiary" expand="lg" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
      <Navbar.Brand as={Link} to="/" className="logo">
        StreamFlix
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/" className="active">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/link">
            Películas
          </Nav.Link>
          <Nav.Link as={Link} to="/link">
            Series
          </Nav.Link>
          <NavDropdown title="Perfil" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/action">
              Editar Perfil
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/another-action">
              Mi Lista
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} onClick={cerrar}>
              Cerrar Sesión
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="#" disabled>
            Novedades
          </Nav.Link>
        </Nav>
        <Form className="d-flex" role="search" onSubmit={submit}>
          <FormControl type="search" placeholder="Buscar por nombre" className="me-2" aria-label="Buscar" onChange={inputChange} />
          <Button variant="outline-success" type="submit">
            Buscar
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;