import reducer from "../../redux/reducers/reducers";
import * as actions from "../../redux/actions/actions";

describe("reducer", () => {
  // Prueba para verificar que el estado inicial se devuelve correctamente
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      characters: [],
      comics: [],
      loading: false,
      error: null,
      totalResults: 0,
      favorites: [],
      favoritesCharacters: [],
      selectedCharacter: null,
    });
  });

  // Prueba para verificar el manejo de la acción FETCH_CHARACTERS_REQUEST
  it("should handle FETCH_CHARACTERS_REQUEST", () => {
    expect(
      reducer(undefined, {
        type: actions.FETCH_CHARACTERS_REQUEST,
      }),
    ).toEqual({
      characters: [],
      comics: [],
      loading: true,
      error: null,
      totalResults: 0,
      favorites: [],
      favoritesCharacters: [],
      selectedCharacter: null,
    });
  });

  // Prueba para verificar el manejo de la acción FETCH_CHARACTERS_SUCCESS
  it("should handle FETCH_CHARACTERS_SUCCESS", () => {
    const characters = [{ id: 1, name: "Character 1" }];
    const totalResults = 1;
    expect(
      reducer(undefined, {
        type: actions.FETCH_CHARACTERS_SUCCESS,
        payload: {
          characters,
          totalResults,
        },
      }),
    ).toEqual({
      characters,
      comics: [],
      loading: false,
      error: null,
      totalResults,
      favorites: [],
      favoritesCharacters: [],
      selectedCharacter: null,
    });
  });

  // Prueba para verificar el manejo de la acción FETCH_CHARACTERS_FAILURE
  it("should handle FETCH_CHARACTERS_FAILURE", () => {
    const error = "Error fetching characters";
    expect(
      reducer(undefined, {
        type: actions.FETCH_CHARACTERS_FAILURE,
        payload: error,
      }),
    ).toEqual({
      characters: [],
      comics: [],
      loading: false,
      error,
      totalResults: 0,
      favorites: [],
      favoritesCharacters: [],
      selectedCharacter: null,
    });
  });

  // Agrega comentarios similares para las demás pruebas...
});
