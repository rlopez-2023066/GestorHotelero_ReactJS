import React from 'react';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    Swal.fire({
      icon: 'warning',
      title: 'Acceso denegado',
      text: 'Debes iniciar sesión para acceder a esta página.',
      confirmButtonColor: '#4d1b80'
    });

    return <Navigate to="/auth" replace />;
  }

  return children;
};

export default ProtectedRoute;