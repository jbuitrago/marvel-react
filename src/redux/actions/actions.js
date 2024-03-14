// actions.js

export const FETCH_CHARACTERS_REQUEST = "FETCH_CHARACTERS_REQUEST";
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";
export const FETCH_CHARACTERS_FAILURE = "FETCH_CHARACTERS_FAILURE";
export const SEARCH_CHARACTERS_REQUEST = "SEARCH_CHARACTERS_REQUEST";

export const FETCH_COMICS_REQUEST = "FETCH_COMICS_REQUEST"; // Agrega esta constante
export const FETCH_COMICS_SUCCESS = "FETCH_COMICS_SUCCESS"; // Agrega esta constante
export const FETCH_COMICS_FAILURE = "FETCH_COMICS_FAILURE"; // Agrega esta constante

export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const UPDATE_CHARACTERS = "UPDATE_CHARACTERS";
export const SELECT_CHARACTER = "SELECT_CHARACTER";

export const fetchCharactersRequest = () => ({
  type: FETCH_CHARACTERS_REQUEST,
});

export const fetchCharactersSuccess = (characters, totalResults) => ({
  type: FETCH_CHARACTERS_SUCCESS,
  payload: {
    characters,
    totalResults,
  },
});

export const fetchCharactersFailure = (error) => ({
  type: FETCH_CHARACTERS_FAILURE,
  payload: error,
});

export const searchCharactersRequest = (query) => ({
  type: SEARCH_CHARACTERS_REQUEST,
  payload: query,
});

export const fetchComicsRequest = (characterId) => ({
  // Agrega esta acción para los cómics
  type: FETCH_COMICS_REQUEST,
  payload: { characterId },
});

export const fetchComicsSuccess = (comics) => ({
  // Agrega esta acción para los cómics
  type: FETCH_COMICS_SUCCESS,
  payload: comics,
});

export const fetchComicsFailure = (error) => ({
  // Agrega esta acción para los cómics
  type: FETCH_COMICS_FAILURE,
  payload: error,
});

export const addToFavorites = (characterId) => ({
  type: ADD_TO_FAVORITES,
  payload: characterId,
});

export const removeFromFavorites = (characterId) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: characterId,
});

// Acción para actualizar la lista de personajes en el store
export const updateCharacters = (newCharacters) => {
  return {
    type: UPDATE_CHARACTERS,
    payload: newCharacters,
  };
};

export const selectCharacter = (character) => ({
  type: SELECT_CHARACTER,
  payload: character,
});
