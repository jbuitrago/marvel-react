import React from "react";
import styled from "styled-components";

// Estilos para el contenedor de la información del personaje
const StyledCharacterInfo = styled.div`
  width: 100%; /* Ancho del contenedor */
  height: 56px; /* Altura del contenedor */
  padding: 16px; /* Espaciado interno */
  display: flex; /* Contenedor flexible */
  flex-direction: column; /* Dirección de los elementos */
  justify-content: flex-end; /* Justificar contenido al final */
  color: #ffffff; /* Color del texto */
  font-family: "Roboto Condensed", sans-serif; /* Fuente de texto */
  font-size: 14px; /* Tamaño de la fuente */
  font-weight: 400; /* Grosor de la fuente */
  line-height: 16px; /* Altura de línea */
  letter-spacing: 0em; /* Espaciado entre letras */
  text-align: left; /* Alineación del texto */
`;

// Componente CharacterInfo que muestra el nombre del personaje
const CharacterInfo = ({ character }) => {
  return <StyledCharacterInfo>{character.name}</StyledCharacterInfo>; // Mostrar el nombre del personaje
};

export default CharacterInfo;
