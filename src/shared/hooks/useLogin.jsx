import { useState } from "react";
import toast from 'react-hot-toast';
import { loginRequest } from "./../../services/api";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (username, password) => {
    setIsLoading(true);
    const user = {
      userLogin: username,
      password
    };

    const response = await loginRequest(user);
    setIsLoading(false);

    if (response.error) {
      return toast.error(
        response?.e?.response?.data ||
        'Error general al intentar logearse. Intenta de nuevo.'
      );
    }

    const { token, loggedUser } = response.data;

if (!loggedUser || !loggedUser.role) {
  return toast.error("No se pudo identificar el rol del usuario");
}

const role = loggedUser.role;

localStorage.setItem('token', token);
localStorage.setItem('user', JSON.stringify(loggedUser));

switch (role) {

  case 'ADMIN':
    navigate('/dashboardAdmin');
    break;
  case 'ADMIN_HOTEL':
    navigate('/dashboardAdminHotel');
    break;
  case 'CLIENT':
    navigate('/dashboardClient');
    break;
  default:
    navigate('/dashboardGeneral');
    break;
}

  };

  return {
    login,
    isLoading
  };
};
