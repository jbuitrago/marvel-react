import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import CharacterPhoto from "./CharacterPhoto";
import CharacterInfo from "./CharacterInfo";
import heartEmptyIcon from "../../assets/images/HeardWhite.png";
import heartFilledIcon from "../../assets/images/HeardRed.png";
import { Link } from "react-router-dom";
import {
  removeFromFavorites,
  addToFavorites,
} from "../../redux/actions/actions";

// Estilos para el contenedor del personaje
const StyledCharacterCard = styled.div`
  width: 172.5px; /* Ancho del contenedor del personaje */
  background: #ffffff; /* Fondo blanco */
`;

// Estilos para el icono de corazón (favoritos)
const HeartIcon = styled.img`
  width: 24px; /* Ancho del icono de corazón */
  height: 21.68px; /* Altura del icono de corazón */
  cursor: pointer; /* Cambia el cursor a pointer para indicar que es interactivo */
`;

// Estilos para el contenedor flexible que contiene la información del personaje y el icono de corazón
const FlexStyle = styled.div`
  display: flex; /* Contenedor flexible */
  align-items: center; /* Centra los elementos verticalmente */
  background: #000000; /* Fondo negro */
  transition: background 0.3s; /* Transición suave para el cambio de fondo */
  background-image: linear-gradient(
    transparent 50%,
    #ff0000 50%
  ); /* Gradiente de color rojo */
  background-size: 100% 200%; /* Tamaño del gradiente */
  background-position: top; /* Posición inicial del gradiente */

  &:hover {
    background-position: top; /* Cambia la posición del gradiente en el hover */
  }
`;

// Estilos para el texto del personaje
const CharacterText = styled.div`
  flex-grow: 1; /* El texto ocupa todo el espacio disponible */
  padding-left: 8px; /* Espaciado a la izquierda */
`;

// Componente CharacterCard que muestra la información del personaje y permite agregarlo o quitarlo de favoritos
const CharacterCard = ({ character }) => {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false); // Estado para indicar si el personaje es favorito
  const favorites = useSelector((state) => state.favorites); // Obtener la lista de personajes favoritos del estado de Redux

  useEffect(() => {
    // Verificar si el personaje está en la lista de favoritos cuando cambia la lista de favoritos o el ID del personaje
    setIsFavorite(favorites.includes(character.id));
  }, [favorites, character.id]);

  // Función para manejar el clic en el icono de corazón (agregar o quitar de favoritos)
  const handleHeartClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(character.id)); // Si el personaje es favorito, quitarlo de favoritos
    } else {
      dispatch(addToFavorites(character.id)); // Si el personaje no es favorito, agregarlo a favoritos
    }
    setIsFavorite(!isFavorite); // Cambiar el estado después de la acción
  };

  return (
    <StyledCharacterCard>
      {/* Enlace al detalle del personaje */}
      <Link key={character.id} to={`/detail/${character.id}`}>
        {/* Componente para mostrar la foto del personaje */}
        <CharacterPhoto character={character} />
      </Link>
      {/* Contenedor flexible que muestra la información del personaje y el icono de corazón */}
      <FlexStyle>
        {/* Componente para mostrar la información del personaje */}
        <CharacterText>
          <CharacterInfo character={character} />
        </CharacterText>
        {/* Icono de corazón (favoritos) con el estado condicional basado en si el personaje es favorito o no */}
        <HeartIcon
          src={isFavorite ? heartFilledIcon : heartEmptyIcon}
          alt={character.title}
          onClick={handleHeartClick} // Manejar el clic en el icono de corazón
        />
      </FlexStyle>
    </StyledCharacterCard>
  );
};

export default CharacterCard;
