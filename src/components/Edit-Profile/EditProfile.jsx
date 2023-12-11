import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';

const EditProfile = () => {
  const { userLogin, updateUserProfile } = useContext(AuthContext);
  const [nombre, setNombre] = useState(userLogin?.displayName || '');
  const [email, setEmail] = useState(userLogin?.email || '');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    try {
      await updateUserProfile(nombre, email, password);

      Swal.fire({
        icon: 'success',
        title: 'Perfil actualizado',
        text: 'Tu perfil se ha actualizado exitosamente.',
        timer: 1500,
        showConfirmButton: false,
      });

      navigate('/edit-profile'); 
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: 'error',
        title: 'Error al actualizar el perfil',
        text: 'Hubo un problema al intentar actualizar tu perfil. Por favor, inténtalo de nuevo.',
      });
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center">Editar Perfil</h2>
      <form className="edit-profile-form mx-auto" style={{ maxWidth: '400px' }} onSubmit={handleUpdateProfile}>
        <div className="mb-3">
          <label className="form-label fw-bold">Nombre Actual:</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nuevo nombre"
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Correo Electrónico Actual:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Nuevo correo electrónico"
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Nueva Contraseña:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Nueva contraseña"
          />
        </div>
        <div className="mb-5">
          <button type="submit" className="btn btn-primary w-100">Guardar Cambios</button>
          <Link to="/profile">
            <button type="button" className="btn btn-secondary me-2 w-100 mt-2 ">Cancelar</button>
          </Link>
          <Link to="/home">
            <button type="button" className="btn btn-secondary me-2 w-100 mt-2 ">Volver al Home</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
