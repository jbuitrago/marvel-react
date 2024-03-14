import React from "react";
import styled from "styled-components";
import heartFilledIcon from "../../assets/images/HeardRed.png";

// Estilos para el icono de favoritos
const StyledFavoritesIcon = styled.img`
  width: 24px;
  height: 21.68px;
  cursor: pointer;
`;

// Componente de icono de favoritos
const FavoritesIcon = ({ onFavoritesClick }) => {
  // Manejador de clic para el icono de favoritos
  const handleHeartClick = () => {
    onFavoritesClick(); // Llama a la función proporcionada por el padre al hacer clic en el icono
  };

  return (
    // Renderiza el icono de favoritos con estilos y maneja clics
    <StyledFavoritesIcon
      src={heartFilledIcon} // Fuente de la imagen del icono de favoritos
      alt="Favorites" // Texto alternativo para la imagen
      onClick={handleHeartClick} // Manejador de clic para el icono de favoritos
    />
  );
};

export default FavoritesIcon; // Exporta el componente de icono de favoritos
