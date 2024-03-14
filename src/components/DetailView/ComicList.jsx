import React from "react";
import styled from "styled-components";
import ComicCard from "./ComicCard";

// Estilos para el contenedor principal de la lista de cómics
const StyledComicList = styled.div`
  width: 100%; /* Ancho completo */
  overflow-x: auto; /* Permitir desplazamiento horizontal si el contenido es demasiado ancho */
  white-space: nowrap; /* Evitar que los elementos se rompan en varias líneas */
`;

// Estilos para el contenedor de los cómics individuales
const ComicListContainer = styled.div`
  display: flex; /* Contenedor de los cómics */
  gap: 12px; /* Espacio entre cómics */
  padding: 12px; /* Espaciado interno */
`;

// Componente que muestra una lista de cómics
const ComicList = ({ comics }) => {
  return (
    <StyledComicList>
      <ComicListContainer>
        {/* Mapea cada cómic y renderiza una tarjeta de cómic */}
        {comics.map((comic) => (
          <ComicCard key={comic.id} comic={comic} />
        ))}
      </ComicListContainer>
    </StyledComicList>
  );
};

export default ComicList;
