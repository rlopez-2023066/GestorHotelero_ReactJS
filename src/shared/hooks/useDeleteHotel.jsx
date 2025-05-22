import { useState } from "react";
import { deleteHotelRequest } from "../../Services/api"; 

export const useDeleteHotel = (onSuccess) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteHotel = async (hotelId) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await deleteHotelRequest(hotelId);
      if (!response.error) {
        if (onSuccess) onSuccess();
      } else {
        setError("Error eliminando el hotel");
      }
    } catch (err) {
      setError(err.message || "Error inesperado");
    } finally {
      setIsLoading(false);
    }
  };

  return { deleteHotel, isLoading, error };
};

