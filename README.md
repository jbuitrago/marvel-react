# Proyecto Marvel Characters

Este proyecto es una aplicación web para explorar y descubrir información sobre personajes y cómics del universo de Marvel.

## Flujo de la Aplicación

1. **Vista de Lista de Personajes (Home)**:

   - Muestra una lista de personajes de Marvel.
   - Cada tarjeta de personaje muestra una imagen, nombre y botón para agregar a favoritos.
   - Permite buscar personajes por nombre.

2. **Vista de Detalle de Personaje**:

   - Muestra detalles específicos de un personaje seleccionado.
   - Incluye información como nombre, descripción y lista de cómics asociados.
   - Permite agregar o eliminar el personaje de la lista de favoritos.

3. **Vista de Personajes Favoritos**:
   - Muestra una lista de personajes marcados como favoritos.
   - Permite visualizar los detalles de un personaje seleccionado.
   - Permite eliminar un personaje de la lista de favoritos.

## Casos de Uso

1. **Explorar Personajes**:

   - El usuario puede explorar una lista de personajes de Marvel en la vista de lista.
   - Puede hacer clic en un personaje para ver más detalles en la vista de detalle.

2. **Buscar Personajes**:

   - El usuario puede buscar personajes por nombre en la vista de lista.
   - La búsqueda actualiza dinámicamente la lista de personajes mostrados.

3. **Ver Detalles del Personaje**:

   - El usuario puede ver detalles específicos de un personaje en la vista de detalle.
   - Los detalles incluyen información como nombre, descripción y cómics asociados.

4. **Agregar a Favoritos**:

   - El usuario puede agregar un personaje a la lista de favoritos desde la vista de lista o de detalle.
   - Los personajes favoritos se muestran en la vista de favoritos.

5. **Eliminar de Favoritos**:
   - El usuario puede eliminar un personaje de la lista de favoritos desde la vista de favoritos.
   - Los personajes eliminados de favoritos ya no se muestran en esta vista.

## Archivos Creados

- **Header.js**: Componente de encabezado de la aplicación.
- **CharacterCard.js**: Componente para mostrar tarjetas de personajes en la vista de lista.
- **CharacterDetails.js**: Componente para mostrar detalles de personajes en la vista de detalle.
- **ComicCard.js**: Componente para mostrar tarjetas de cómics en la vista de detalle.
- **ListViewContainer.js**: Contenedor para la vista de lista de personajes.
- **DetailViewContainer.js**: Contenedor para la vista de detalle de un personaje.
- **FavoritesViewContainer.js**: Contenedor para la vista de personajes favoritos.
- **fetchCharactersSaga.js**: Saga de Redux para manejar las solicitudes de obtención de personajes desde la API.
- **fetchComicsSaga.js**: Saga de Redux para manejar las solicitudes de obtención de cómics asociados a un personaje desde la API.

## Tipos de Pruebas Realizadas

- Pruebas para componentes visuales usando Jest y React Testing Library.
- Pruebas para sagas de Redux usando Jest y Redux Saga Testing Library.

## Instalación

Para instalar y ejecutar este proyecto localmente, sigue estos pasos:

1. Clona este repositorio en tu máquina local.
2. En la raíz del proyecto, ejecuta `npm install` para instalar las dependencias.
3. Después de la instalación, ejecuta `npm start` para iniciar la aplicación en tu navegador.

## Archivo package.json

El archivo `package.json` contiene la información sobre el proyecto, las dependencias utilizadas y los scripts disponibles. A continuación se muestran algunas de las opciones más relevantes:

- **Dependencias**:

  - `react`: Biblioteca principal de React para construir interfaces de usuario.
  - `react-redux`: Biblioteca para integrar Redux con React.
  - `redux`: Biblioteca para gestionar el estado de la aplicación.
  - `redux-saga`: Middleware para manejar efectos secundarios asíncronos en Redux.
  - `axios`: Cliente HTTP para realizar solicitudes a la API.
  - `styled-components`: Biblioteca para escribir estilos CSS en componentes de React.
  - `react-router-dom`: Biblioteca para manejar el enrutamiento en aplicaciones React.
  - `lodash`: Biblioteca de utilidades de JavaScript, utilizado aquí para la función de debounce.

- **Scripts**:
  - `start`: Inicia la aplicación en modo de desarrollo.
  - `build`: Construye la aplicación para producción.
  - `test`: Ejecuta las pruebas en modo interactivo utilizando Jest.
  - `eject`: Expone las configuraciones internas de Webpack y Babel utilizadas por Create React App.
  - `eslint`: Ejecuta ESLint para analizar el código en busca de errores y aplicar reglas de estilo.
  - `prettier`: Formatea el código según las reglas definidas en el archivo de configuración Prettier.
