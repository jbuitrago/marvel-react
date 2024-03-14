import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/reducers";
import rootSaga from "./sagas/rootSaga";

// Crear el middleware de saga
const sagaMiddleware = createSagaMiddleware();

// Crear el almacenamiento Redux
const store = createStore(
  rootReducer, // El reductor raíz que combina todos los reductores individuales
  undefined, // No se proporciona un estado pre-cargado
  applyMiddleware(sagaMiddleware), // Aplicar el middleware de saga al almacenamiento
);

// Ejecutar las sagas
sagaMiddleware.run(rootSaga);

// Exportar el almacenamiento Redux configurado
export default store;
