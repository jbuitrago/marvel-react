import React from "react";
import styled from "styled-components";

// Estilos para el título
const StyledTitle = styled.h1`
  width: 960px; /* Ancho del título */
  height: 38px; /* Altura del título */
  /* Puedes agregar más estilos personalizados aquí según sea necesario */
`;

// Componente de título reutilizable
const TitleComponent = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>; // Renderiza el título utilizando los estilos definidos
};

export default TitleComponent; // Exporta el componente de título
