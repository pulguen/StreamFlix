import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const { registerEmail, userLogin } = useContext(AuthContext);
  const [nameRegister, setNameRegister] = useState('');
  const [emailRegister, setEmailRegister] = useState('');
  const [passRegister, setPassRegister] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const navigate = useNavigate();

  const registrar = async (e) => {
    e.preventDefault();

    // Verifica si las contraseñas coinciden
    if (passRegister !== confirmPass) {
      Swal.fire({
        icon: 'error',
        title: 'Contraseñas no coinciden',
        text: 'Las contraseñas ingresadas no coinciden. Por favor, inténtalo de nuevo.',
      });
      return;
    }

    try {
      await registerEmail(nameRegister, emailRegister, passRegister);
      navigate('/');

      // Muestra SweetAlert2 después de un registro exitoso
      Swal.fire({
        icon: 'success',
        title: 'Registro exitoso',
        text: '¡Te has registrado exitosamente!',
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (error) {
      console.error(error);

      // Muestra SweetAlert2 en caso de error en el registro
      Swal.fire({
        icon: 'error',
        title: 'Error en el registro',
        text: 'Hubo un problema al intentar registrarte. Por favor, inténtalo de nuevo.',
      });
    }
  };

  return userLogin ? (
    <h1>Ya estoy registrado</h1>
  ) : (
    <div className="container mt-5 mb-5">
      <h2 className="text-center">Nuevo usuario</h2>
      <form className="register-form mx-auto" style={{ maxWidth: '400px' }} onSubmit={registrar}>
        <div className="mb-3 d-flex flex-column align-items-start">
          <label className="form-label fw-bold">Nombre</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setNameRegister(e.target.value)}
            placeholder="Ingresa tu nombre"
          />
        </div>
        <div className="mb-3 d-flex flex-column align-items-start">
          <label className="form-label fw-bold">Email</label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setEmailRegister(e.target.value)}
            placeholder="Ingresa tu email"
          />
        </div>
        <div className="mb-3 d-flex flex-column align-items-start">
          <label className="form-label fw-bold">Contraseña</label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setPassRegister(e.target.value)}
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <div className="mb-3 d-flex flex-column align-items-start">
          <label className="form-label fw-bold">Confirmar Contraseña</label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setConfirmPass(e.target.value)}
            placeholder="Confirma tu contraseña"
          />
        </div>
        <div className="mb-5 mt-4">
          <button type="submit" className="btn btn-primary w-100">Confirmar</button>
        </div>
        <div>
          <Link to="/login">
            <button className="btn btn-primary w-100 mt-2">Volver</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
