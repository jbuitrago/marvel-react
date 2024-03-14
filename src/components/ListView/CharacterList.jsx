import React from "react";
import styled from "styled-components";
import CharacterCard from "./CharacterCard";

// Estilos para el contenedor de la lista de personajes
const StyledCharacterList = styled.div`
  max-width: 100%; /* Ancho máximo del contenedor */
  height: 1031.89px; /* Altura del contenedor */
  padding: 0px 48px; /* Espaciado interno */
  display: flex; /* Contenedor flexible */
  flex-wrap: wrap; /* Envolver los elementos en filas */
  grid-template-columns: repeat(
    auto-fill,
    minmax(300px, 1fr)
  ); /* Columnas automáticas con tamaño mínimo y máximo */
  gap: 16px; /* Espacio entre elementos */
`;

// Componente CharacterList que muestra una lista de personajes
const CharacterList = ({ characters }) => {
  return (
    <StyledCharacterList>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} /> // Renderizar un CharacterCard por cada personaje
      ))}
    </StyledCharacterList>
  );
};

export default CharacterList;
