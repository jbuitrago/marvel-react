import React from "react";
import { createRoot } from "react-dom/client"; // Importa createRoot desde react-dom/client en lugar de react-dom
import { Provider } from "react-redux";
import store from "./redux/store"; // Asegúrate de tener tu tienda configurada correctamente

import App from "./App";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
