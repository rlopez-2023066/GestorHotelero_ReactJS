import axios from "axios";

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:2002',
        timeout: 2000
    }
)



export const registerRequest = async(user)=> {
    try{
        return await apiClient.post('/register', user)
    }catch(error){
        return {
            error: true,
            error
        }
    }
}

export const loginRequest = async(userData)=>{
    try{
        return await apiClient.post('/login', userData)
        
    }catch(error){
        return {
            error: true,
            error
        }
    }
}

export const getHotelsRequest = async () => {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Token no encontrado, por favor inicia sesión');

    const response = await apiClient.get('/v1/hotel/getHotels', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response;
};

export const addHotelRequest = async (hotelData) => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('Token no encontrado, por favor inicia sesión');

  try {
    const response = await apiClient.post('/v1/hotel/addHotel', hotelData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response;
  } catch (error) {
    return {
      error: true,
      error
    };
  }
};

export const deleteHotelRequest = async (hotelId) => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('Token no encontrado, por favor inicia sesión');

  try {
    const response = await apiClient.delete(`/v1/hotel/deleteHotel/${hotelId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response;
  } catch (error) {
    return { error: true, error };
  }
};

export const updateHotelRequest = async (hotelId, data) => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('Token no encontrado, por favor inicia sesión');

  try {
    const response = await apiClient.put(
      `/v1/hotel/updateHotel/${hotelId}`,
      data, 
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response;
  } catch (error) {
    return {
      error: true,
      error
    };
  }
};

