import { useState } from "react";
import { deleteHotelRequest } from "./../../services/api"; 
import toast from "react-hot-toast";

export const useDeleteHotel = (onSuccess) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteHotel = async (hotelId) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await deleteHotelRequest(hotelId);
      if (!response.error) {
        toast.success('Hotel eliminado exitosamente')
        if (onSuccess) onSuccess();
      } else {
        toast.error('Error eliminando Hotel')
      }
    } catch (err) {
      const errorMsg = err.message || "Error inesperado";
      setError(errorMsg)
      toast.error(errorMsg)
    } finally {
      setIsLoading(false);
    }
  };

  return { deleteHotel, isLoading, error };
};

