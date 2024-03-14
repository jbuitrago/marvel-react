import {
  FETCH_CHARACTERS_REQUEST,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE,
  FETCH_COMICS_REQUEST,
  FETCH_COMICS_SUCCESS,
  FETCH_COMICS_FAILURE,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  UPDATE_CHARACTERS,
  SELECT_CHARACTER,
} from "../actions/actions";

const initialState = {
  characters: [], // Lista de personajes
  comics: [], // Lista de cómics
  loading: false, // Indicador de carga
  error: null, // Error en caso de que ocurra
  totalResults: 0, // Total de resultados (para la solicitud de personajes)
  favorites: [], // Lista de personajes favoritos (solo IDs)
  favoritesCharacters: [], // Lista completa de personajes favoritos
  selectedCharacter: null, // Personaje seleccionado actualmente
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: action.payload.characters,
        totalResults: action.payload.totalResults,
        loading: false,
        error: null,
      };
    case FETCH_CHARACTERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_COMICS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_COMICS_SUCCESS:
      return {
        ...state,
        comics: action.payload, // Almacena los cómics en el estado
        loading: false,
        error: null,
      };
    case FETCH_COMICS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload], // Agrega un nuevo ID de personaje a la lista de favoritos
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((id) => id !== action.payload), // Elimina el ID de personaje de la lista de favoritos
      };
    case UPDATE_CHARACTERS:
      return {
        ...state,
        favoritesCharacters: action.payload, // Actualiza la lista completa de personajes favoritos
      };
    case SELECT_CHARACTER:
      return {
        ...state,
        selectedCharacter: action.payload, // Establece el personaje seleccionado actualmente
      };
    default:
      return state;
  }
};

export default reducer;
