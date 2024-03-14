import { all } from "redux-saga/effects";
import rootSaga from "../../redux/sagas/rootSaga";
import { watchFetchCharacters } from "../../redux/sagas/fetchCharactersSaga";
import { watchFetchComics } from "../../redux/sagas/fetchComicsSaga";

describe("rootSaga", () => {
  it("should combine all sagas correctly", () => {
    const gen = rootSaga();

    // Verifica que el primer efecto sea una llamada a la función all con las sagas adecuadas
    expect(gen.next().value).toEqual(
      all([watchFetchCharacters(), watchFetchComics()]),
    );

    // Verifica que no haya más efectos después de llamar a all
    expect(gen.next().done).toBe(true);
  });
});
