import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logoIcon from "../../assets/images/Logo.png";

// Estilos para la imagen del logo
const StyledImage = styled.img`
  // Puedes agregar estilos personalizados aquí
`;

// Componente del icono del logo
const LogoIcon = () => {
  return (
    // Enlace que redirige a la página de inicio al hacer clic en el logo
    <Link to="/">
      {/* Renderiza la imagen del logo con estilos y texto alternativo */}
      <StyledImage src={logoIcon} alt="Logo" />
    </Link>
  );
};

export default LogoIcon; // Exporta el componente del icono del logo
