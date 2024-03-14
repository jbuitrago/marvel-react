import React from "react";
import styled from "styled-components";
import ComicPhoto from "./ComicPhoto";
import ComicInfo from "./ComicInfo";

// Estilos para el contenedor de la tarjeta de cómic
const StyledComicCard = styled.div`
  width: 179.2px; /* Ancho de la tarjeta de cómic */
  height: 340.8px; /* Altura de la tarjeta de cómic */
  margin-bottom: 12px; /* Margen inferior para separar las tarjetas */
`;

// Componente para renderizar una tarjeta de cómic
const ComicCard = ({ comic }) => {
  return (
    <StyledComicCard>
      {/* Renderiza la foto del cómic */}
      <ComicPhoto comic={comic} />
      {/* Renderiza la información del cómic */}
      <ComicInfo comic={comic} />
    </StyledComicCard>
  );
};

export default ComicCard;
