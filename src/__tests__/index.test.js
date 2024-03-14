import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "../redux/store";
import App from "../App";

// Mock para la función createRoot de react-dom/client
jest.mock("react-dom/client", () => ({
  createRoot: jest.fn(), // Mock de la función createRoot
}));

describe("Index", () => {
  // Prueba para verificar que el componente App se renderiza dentro de Provider
  it("should render App component inside Provider", () => {
    // Mock de la función render de createRoot
    const rootRenderMock = jest.fn();
    createRoot.mockImplementation(() => ({
      render: rootRenderMock, // Implementación del mock
    }));

    // Importa el archivo index para ejecutar la prueba
    require("../index");

    // Verifica que se llame a createRoot con el elemento root
    expect(createRoot).toHaveBeenCalledWith(document.getElementById("root"));
    // Verifica que se llame a render con el componente App dentro de Provider
    expect(rootRenderMock).toHaveBeenCalledWith(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });
});
