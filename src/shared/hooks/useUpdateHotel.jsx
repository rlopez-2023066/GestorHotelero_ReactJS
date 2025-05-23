import { useState } from "react";
import { updateHotelRequest } from "./../../services/api";
import toast from "react-hot-toast";

export const useUpdateHotel = (onSuccess) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateHotel = async (hotelId, updatedData) => {
    try {
      setLoading(true);
      setError(null);

      const response = await updateHotelRequest(hotelId, updatedData);
      toast.success("Hotel actualizado exitosamente");
      if (onSuccess) onSuccess(); 
      return response;
    } catch (err) {
      console.error("Error al actualizar hotel:", err);
      setError(err?.response?.data?.message || "Error al actualizar hotel");
      toast.error("Error al actualizar hotel");
    } finally {
      setLoading(false);
    }
  };

  return { updateHotel, loading, error };
};
