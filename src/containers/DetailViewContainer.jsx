import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ComicList from "../components/DetailView/ComicList"; // Importa el componente de lista de cómics
import styled from "styled-components";
import { fetchComicsRequest, selectCharacter } from "../redux/actions/actions"; // Importa las acciones necesarias
import TitleComponent from "../components/Common/Title"; // Importa el componente de título

// Estilos para el contenedor de la vista detallada
const StyleDetailViewContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 48px 0;
`;

const DetailViewContainer = ({ match }) => {
  const dispatch = useDispatch(); // Función de despacho de Redux
  const comics = useSelector((state) => state.comics); // Obtiene la lista de cómics del estado Redux

  useEffect(() => {
    const { id } = match.params; // Obtiene el ID del personaje de los parámetros de la ruta
    dispatch(selectCharacter(id)); // Selecciona el personaje usando la acción correspondiente
    dispatch(fetchComicsRequest(id)); // Obtiene la lista de cómics asociados con el personaje
  }, [dispatch, match.params]);

  useEffect(() => {
    // Aquí puedes agregar lógica adicional si es necesario después de que se carguen los cómics
  }, [comics]);

  return (
    <>
      <StyleDetailViewContainer>
        {/* Componente de título para mostrar "COMICS" */}
        <TitleComponent title={"COMICS"} />
        {/* Componente de lista de cómics */}
        <ComicList comics={comics || []} />
      </StyleDetailViewContainer>
    </>
  );
};

export default DetailViewContainer;
