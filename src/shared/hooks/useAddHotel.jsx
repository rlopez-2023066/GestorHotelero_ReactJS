import { useState } from "react";
import { addHotelRequest } from "../../Services/api";
import toast from "react-hot-toast";

export const useAddHotel = (onSuccess) => {
  const [loading, setLoading] = useState(false);

  const addHotel = async (hotelData) => {
    try {
      setLoading(true);
      const response = await addHotelRequest(hotelData);
      toast.success("Hotel agregado exitosamente");
      if (onSuccess) onSuccess(); 
      return response;
    } catch (error) {
      console.error("Error al agregar hotel:", error);
      toast.error("Error al agregar hotel");
    } finally {
      setLoading(false);
    }
  };

  return { addHotel, loading };
};