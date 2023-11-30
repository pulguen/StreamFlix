import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const { registerEmail, userLogin } = useContext(AuthContext);
  const [nameRegister, setNameRegister] = useState('');
  const [emailRegister, setEmailRegister] = useState('');
  const [passRegister, setPassRegister] = useState('');
  const navigate = useNavigate();

  const registrar = async (e) => {
    e.preventDefault();
    await registerEmail(nameRegister, emailRegister, passRegister);
    navigate('/');
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
        <div className="mb-5 mt-4">
          <button type="submit" className="btn btn-primary w-100">
            Confirmar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
