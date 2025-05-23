import { useEffect, useState } from "react";
import { useHotels } from "../../shared/hooks/useHotels";
import toast from "react-hot-toast";
import { Pencil, Trash2, Plus } from "lucide-react";
import ModalAddHotel from "../Modal/ModalAddHotel";
import {useAddHotel} from '../../shared/hooks/useAddHotel'
import {useDeleteHotel} from '../../shared/hooks/useDeleteHotel'
import ModalEditHotel from "../Modal/ModalUpdateHotel";
import { useUpdateHotel } from "../../shared/hooks/useUpdateHotel"; 

const HotelsTable = () => {
  const { getHotels, hotels, isLoading } = useHotels();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {addHotel, isLoading: adding} = useAddHotel(getHotels)
  const { deleteHotel, isLoading: deleting, error: deleteError } = useDeleteHotel(getHotels);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [hotelToEdit, setHotelToEdit] = useState(null);
  const { updateHotel, isLoading: updating, error: updateError } = useUpdateHotel(getHotels);


  useEffect(() => {
    getHotels();
  }, []);

  

  const handleDelete = async (hotelId) => {
    const confirmed = window.confirm("¿Estás seguro de eliminar este hotel?");
    if (!confirmed) return;

    await deleteHotel(hotelId);
  };

  const handleAddHotel = (newHotel) => {
    const dataToSend = {
      ...newHotel,
      category: Number(newHotel.category)
    }
    console.log(dataToSend);
    
    addHotel(dataToSend);
    setIsModalOpen(false);
  };

  const handleEdit = (hotelId) => {
    const selectedHotel = hotels.find(hotel => hotel._id === hotelId);
    if (!selectedHotel) return;
    setHotelToEdit(selectedHotel);
    setIsEditModalOpen(true);
  };

  const handleUpdateHotel = async (updatedHotelData) => {
    await updateHotel(hotelToEdit._id, {
      ...updatedHotelData,
      category: Number(updatedHotelData.category)
    });

    if (updateError) {
      toast.error(updateError);
    } 
    setIsEditModalOpen(false);
  };


  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Gestión de Hoteles</h1>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          onClick={() => setIsModalOpen(true)}
        >
          <Plus className="w-5 h-5" /> Nuevo Hotel
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nombre
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Dirección
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Categoría
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Teléfono
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {hotels.length > 0 ? (
              hotels.map((hotel) => (
                <tr key={hotel._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {hotel.name}
                    </div>
                    <div className="text-sm text-gray-500 line-clamp-2">
                      {hotel.description}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {hotel.direction}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {hotel.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {hotel.telephone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(hotel._id)}
                        className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50"
                        aria-label="Editar"
                        disabled={updating}
                      >
                        <Pencil className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(hotel._id)}
                        disabled={deleting}
                        className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50"
                        aria-label="Eliminar"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="px-6 py-4 text-center text-sm text-gray-500"
                >
                  No hay hoteles registrados
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal para agregar hotel */}
            {/* Modal para agregar hotel */}
      <ModalAddHotel
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddHotel}
        isLoading={adding}
      />

      {/* Modal para editar hotel */}
      <ModalEditHotel
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSubmit={handleUpdateHotel}
        initialData={hotelToEdit}
        isLoading={updating}
      />

    </div>
  );
};

export default HotelsTable;
