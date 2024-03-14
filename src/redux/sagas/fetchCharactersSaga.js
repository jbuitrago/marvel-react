import { takeLatest, put, call } from "redux-saga/effects";
import {
  FETCH_CHARACTERS_REQUEST,
  SEARCH_CHARACTERS_REQUEST,
  fetchCharactersSuccess,
  fetchCharactersFailure,
} from "../actions/actions";
import { fetchCharacters } from "../services/api"; // Importa la función para realizar la solicitud API

function* fetchCharactersSaga(action) {
  try {
    let response;
    // Determina si la acción es FETCH_CHARACTERS_REQUEST o SEARCH_CHARACTERS_REQUEST
    if (action.type === FETCH_CHARACTERS_REQUEST) {
      // Realiza una llamada a la API para obtener todos los personajes
      response = yield call(fetchCharacters);
    } else if (action.type === SEARCH_CHARACTERS_REQUEST) {
      // Realiza una llamada a la API para buscar personajes según el término de búsqueda
      response = yield call(fetchCharacters, action.payload);
    }
    // Despacha una acción para indicar que la solicitud fue exitosa y pasa los resultados obtenidos
    yield put(
      fetchCharactersSuccess(response.data.results, response.data.count),
    );
  } catch (error) {
    // En caso de error, despacha una acción para indicar el fallo en la solicitud
    yield put(fetchCharactersFailure(error));
  }
}

// Escucha las acciones FETCH_CHARACTERS_REQUEST y SEARCH_CHARACTERS_REQUEST y llama a fetchCharactersSaga
export function* watchFetchCharacters() {
  yield takeLatest(
    [FETCH_CHARACTERS_REQUEST, SEARCH_CHARACTERS_REQUEST],
    fetchCharactersSaga,
  );
}

export default watchFetchCharacters;
