import React from "react";
import styled from "styled-components";

// Estilos para el contenedor de la foto del cómic
const StyledComicPhoto = styled.div`
  width: 179.2px; /* Ancho fijo */
  min-height: 268.8px; /* Altura mínima para mantener la proporción */

  img {
    width: 100%; /* Ocupar todo el ancho del contenedor */
    min-height: 268.8px; /* Altura mínima para mantener la proporción */
    object-fit: cover; /* Ajustar la imagen para cubrir todo el contenedor */
    border: none; /* Sin borde alrededor de la imagen */
  }
`;

// Componente que muestra la foto de un cómic
const ComicPhoto = ({ comic }) => {
  return (
    <StyledComicPhoto>
      <img
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} /* URL de la imagen */
        alt={comic.title} /* Texto alternativo para accesibilidad */
      />
    </StyledComicPhoto>
  );
};

export default ComicPhoto;
