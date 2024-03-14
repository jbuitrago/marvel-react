import React from "react";
import styled from "styled-components";

// Estilos para el contenedor de la información del cómic
const StyledComicInfo = styled.div`
  font-family: "Roboto Condensed", sans-serif; /* Fuente del texto */
  font-size: 16px; /* Tamaño de fuente */
  font-weight: 500; /* Grosor de la fuente */
  line-height: 19px; /* Altura de línea */
  letter-spacing: 0em; /* Espaciado entre letras */
  text-align: left; /* Alineación del texto */
`;

// Estilos para el título del cómic
const Title = styled.div`
  font-size: 16px; /* Tamaño de fuente */
  font-weight: 500; /* Grosor de la fuente */
  line-height: 19px; /* Altura de línea */
  white-space: pre-line; /* Manejo de espacios en blanco */
`;

// Estilos para el año de publicación del cómic
const Year = styled.div`
  font-family: "Roboto Condensed", sans-serif; /* Fuente del texto */
  font-size: 12px; /* Tamaño de fuente */
  font-weight: 400; /* Grosor de la fuente */
  line-height: 14px; /* Altura de línea */
`;

// Componente para mostrar información sobre un cómic
const ComicInfo = ({ comic }) => {
  let year = "";

  // Busca la fecha de venta del cómic
  const onsaleDate = comic.dates.find((date) => date.type === "onsaleDate");

  // Si se encuentra la fecha de venta válida, extrae el año de la fecha
  if (onsaleDate && onsaleDate.date !== "-0001-11-30T00:00:00-0500") {
    const onsaleDateObj = new Date(onsaleDate.date);

    // Verifica si el año es válido
    if (!isNaN(onsaleDateObj.getFullYear())) {
      year = onsaleDateObj.getFullYear();
    }
  }

  return (
    <StyledComicInfo>
      {/* Renderiza el título del cómic */}
      <Title>{comic.title}</Title>
      {/* Renderiza el año de publicación del cómic si está disponible */}
      {year && <Year>{year}</Year>}
    </StyledComicInfo>
  );
};

export default ComicInfo;
