import { all } from "redux-saga/effects";
import { watchFetchCharacters } from "./fetchCharactersSaga"; // Importa el watcher de la saga de personajes
import { watchFetchComics } from "./fetchComicsSaga"; // Importa el watcher de la saga de cómics

// Función generadora raíz de la saga que combina todos los watchers de las sagas
export default function* rootSaga() {
  yield all([watchFetchCharacters(), watchFetchComics()]);
}
