import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import ListViewContainer from "./containers/ListViewContainer";
import DetailViewContainer from "./containers/DetailViewContainer";
import FavoritesViewContainer from "./containers/FavoritesViewContainer";

import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    // Configuración del enrutador de la aplicación utilizando BrowserRouter
    <Router>
      <div className="App">
        {/* Estilos globales de la aplicación */}
        <GlobalStyles />
        {/* Componente de encabezado */}
        <Header />
        {/* Define las rutas de la aplicación */}
        <Switch>
          {/* Ruta para la vista de lista de personajes */}
          <Route exact path="/" component={ListViewContainer} />
          {/* Ruta para la vista de detalles de un personaje */}
          <Route path="/detail/:id" component={DetailViewContainer} />
          {/* Ruta para la vista de personajes favoritos */}
          <Route path="/favorites" component={FavoritesViewContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
