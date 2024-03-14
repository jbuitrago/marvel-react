import { takeLatest, put, call } from "redux-saga/effects";
import {
  FETCH_COMICS_REQUEST,
  fetchComicsSuccess,
  fetchComicsFailure,
} from "../actions/actions";
import { fetchComics } from "../services/api"; // Importa la función para realizar la solicitud API de cómics

function* fetchComicsSaga(action) {
  try {
    const { characterId } = action.payload; // Obtiene el ID del personaje de la acción
    // Realiza una llamada a la API para obtener los cómics del personaje específico
    const response = yield call(fetchComics, characterId);
    // Despacha una acción para indicar que la solicitud fue exitosa y pasa los cómics obtenidos
    yield put(fetchComicsSuccess(response.data.results));
  } catch (error) {
    // En caso de error, despacha una acción para indicar el fallo en la solicitud
    yield put(fetchComicsFailure(error));
  }
}

// Escucha las acciones FETCH_COMICS_REQUEST y llama a fetchComicsSaga
export function* watchFetchComics() {
  yield takeLatest(FETCH_COMICS_REQUEST, fetchComicsSaga);
}
