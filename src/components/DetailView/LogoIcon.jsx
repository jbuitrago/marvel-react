import React from "react";
import styled from "styled-components";

// Estilos para el contenedor del icono del logo
const StyledLogoIcon = styled.div`
  width: 130px; /* Ancho del contenedor */
  height: 52px; /* Altura del contenedor */
  background-color: #333; /* Color de fondo */
  color: #fff; /* Color del texto */
  display: flex; /* Mostrar como contenedor flexible */
  justify-content: center; /* Centrar horizontalmente */
  align-items: center; /* Centrar verticalmente */
`;

// Componente que muestra el icono del logo
const LogoIcon = () => {
  return (
    <StyledLogoIcon>Logo Icon</StyledLogoIcon>
  ); /* Contenido del icono del logo */
};

export default LogoIcon;
