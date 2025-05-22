import React, { useState } from 'react';
import SideBarAdmin from '../../Components/SlideBar/SideBarAdmin';
import HotelsTable from '../../Components/Tables/HotelsTable';

const DashboardAdmin = () => {
  const [selectedOption, setSelectedOption] = useState("hoteles");

  const renderContent = () => {
    switch (selectedOption) {
      case "hoteles":
        return <HotelsTable />;
      case "usuarios":
        return <div className="p-8">Aquí irá la tabla de usuarios.</div>;
      case "estadisticas":
        return <div className="p-8">Aquí irán las estadísticas.</div>;
      default:
        return <div className="p-8">Seleccione una opción del menú.</div>;
    }
  };

  return (
    <div className="flex">
      <SideBarAdmin onSelectOption={setSelectedOption} />
      <main className="flex-1 bg-gray-100 min-h-screen p-6">
        {renderContent()}
      </main>
    </div>
  );
};

export default DashboardAdmin;
