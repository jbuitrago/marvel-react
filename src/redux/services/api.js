import axios from "axios";

// URL base de la API de Marvel
const BASE_URL = "https://gateway.marvel.com:443/v1/public/";

// Crea una instancia de axios con la URL base de la API
const api = axios.create({
  baseURL: BASE_URL,
});

// Función para obtener los personajes de Marvel
export const fetchCharacters = async (name = "", limit = 50) => {
  try {
    // eslint-disable-next-line no-undef
    let url = `/characters?limit=${limit}&apikey=${process.env.REACT_APP_MARVEL_API_KEY}`;
    if (name) {
      url += `&nameStartsWith=${encodeURIComponent(name)}`;
    }

    const response = await api.get(url);
    return response.data;
  } catch (error) {
    // Manejo de errores de la solicitud
    handleRequestError(error);
  }
};

// Función para obtener los cómics de un personaje específico de Marvel
export const fetchComics = async (characterId) => {
  try {
    // eslint-disable-next-line no-undef
    const url = `/characters/${characterId}/comics?orderBy=onsaleDate&apikey=${process.env.REACT_APP_MARVEL_API_KEY}`;
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    // Manejo de errores de la solicitud
    handleRequestError(error);
  }
};

// Función para manejar los errores de la solicitud
const handleRequestError = (error) => {
  if (error.response) {
    throw new Error(
      `Error fetching characters: ${error.response.status} - ${error.response.data}`,
    );
  } else if (error.request) {
    throw new Error("No response from server");
  } else {
    throw new Error("Error setting up request");
  }
};

export default api;
