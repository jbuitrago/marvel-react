import React from "react";
import styled from "styled-components";

// Estilos para el contenedor de la foto del personaje
const StyledCharacterPhoto = styled.div`
  width: 172.5px; /* Ancho del contenedor */
  height: 189.97px; /* Altura del contenedor */

  img {
    width: 172.5px; /* Ancho de la imagen */
    height: 189.97px; /* Altura de la imagen */
    object-fit: cover; /* Ajuste de la imagen para cubrir el contenedor */
    border: none; /* Sin borde alrededor de la imagen */
  }
`;

// Componente CharacterPhoto que muestra la foto del personaje
const CharacterPhoto = ({ character }) => {
  return (
    <StyledCharacterPhoto>
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`} // URL de la imagen del personaje
        alt={character.name} // Texto alternativo para accesibilidad
      />
    </StyledCharacterPhoto>
  );
};

export default CharacterPhoto;
