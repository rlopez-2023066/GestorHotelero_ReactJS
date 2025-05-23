import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Hotel, LogOut } from 'lucide-react';
import imgLogin from './../../img/Logo_img1-removebg.png';

const SideBarAdmin = ({ onSelectOption }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    localStorage.removeItem('user'); 

    navigate('/auth'); 
  };

  return (
    <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-gradient-to-r from-violet-200 to-pink-200">
      <a href="#">
        <img className="w-50 h-50" src={imgLogin} alt="Logo" />
      </a>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav className="-mx-3 space-y-6">
          <div className="space-y-3">
            <label className="px-3 text-xs text-stone-950 uppercase">Gestión</label>

            <button
              onClick={() => onSelectOption("hoteles")}
              className="w-full flex items-center px-3 py-2 text-stone-950 bg-red-50 hover:bg-gray-100 rounded-lg transition"
            >
              <Hotel />
              <span className="mx-2 text-sm font-medium">Hotel</span>
            </button>
          </div>
        </nav>

        <div className="mt-6">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center px-3 py-2 text-red-700 bg-white hover:bg-red-100 border border-red-300 rounded-lg transition"
          >
            <LogOut />
            <span className="mx-2 text-sm font-semibold">Cerrar sesión</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SideBarAdmin;
