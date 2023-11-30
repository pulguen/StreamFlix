import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const { loginEmail, userLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const loguearse = async (e) => {
    e.preventDefault();
    await loginEmail(email, pass);
    navigate('/');
  };

  return userLogin ? (
    <h1>Ya estoy logueado</h1>
  ) : (
    <div className="container mt-5 mb-5">
      <h2 className="text-center">Iniciar sesión</h2>
      <form className="login-form mx-auto mb-3" style={{ maxWidth: '400px' }} onSubmit={loguearse}>
        <div className="mb-3 d-flex flex-column align-items-start">
          <label className="form-label fw-bold">Email</label>
          <input
            type="email"
            className="form-control text-muted fw-light"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu email"
          />
        </div>
        <div className="mb-3 d-flex flex-column align-items-start">
          <label className="form-label fw-bold">Contraseña</label>
          <input
            type="password"
            className="form-control text-muted fw-light"
            onChange={(e) => setPass(e.target.value)}
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary w-100">
            Iniciar sesión
          </button>
        </div>
      </form>
      <div className="register-link text-center">
        <p className="d-inline">¿No tienes cuenta?</p>
        <Link to="/register" className="d-inline">
          Regístrate
        </Link>
      </div>
    </div>
  );
};

export default Login;







