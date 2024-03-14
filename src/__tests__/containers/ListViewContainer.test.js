import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import ListViewContainer from "../../containers/ListViewContainer";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../../redux/reducers/reducers";
import {
  fetchCharactersRequest,
  searchCharactersRequest,
} from "../../redux/actions/actions";
import charactersMock from "../../mockup/characters.json"; // Importa los datos del archivo JSON

// Función mock para el middleware de Redux Saga
function* sagaMock() {
  yield "mock";
}

// Configuración del store de Redux
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Mock de la función dispatch
store.dispatch = jest.fn();

describe("ListViewContainer Component", () => {
  // Renderiza el componente ListViewContainer y verifica que se llame a la acción fetchCharactersRequest
  it("renders ListViewContainer component", async () => {
    sagaMiddleware.run(sagaMock); // Ejecuta el middleware de sagaMock
    render(
      <Provider store={store}>
        <ListViewContainer />
      </Provider>,
    );

    // Espera hasta que se complete la llamada a la acción fetchCharactersRequest
    await waitFor(() => {
      expect(store.dispatch).toHaveBeenCalledWith(fetchCharactersRequest()); // Verifica que se haya llamado a la acción de fetchCharactersRequest
    });
  });
});
