import { useState } from "react";
import toast from 'react-hot-toast';
import { getHotelsRequest } from "../../Services/api";

export const useHotels = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [hotels, setHotels] = useState([]);

    const getHotels = async () => {
        setIsLoading(true);

        try {
            const response = await getHotelsRequest();
            console.log('Respuesta hotels:', response);
            console.log('response.data:', response.data);

            if (response.data.error) {
                toast.error(
                    response?.data?.message || 'Error al obtener los hoteles. Intenta de nuevo.'
                );
                return;
            }

            setHotels(response.data.hotel || []);
        } catch (error) {
            toast.error('Error inesperado al cargar los hoteles');
            console.error('Error fetching hotels:', error);
        } finally {
            setIsLoading(false);
        }
    };


    return {
        getHotels,
        hotels,
        isLoading
    };
};
