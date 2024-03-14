import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import LogoIcon from "../components/Common/LogoIcon"; // Importa el componente del logo
import FavoritesIcon from "../components/Common/FavoritesIcon"; // Importa el componente del ícono de favoritos
import { updateCharacters } from "../redux/actions/actions"; // Importa la acción para actualizar personajes favoritos
import CharacterDetails from "../components/DetailView/CharacterDetails"; // Importa el componente de detalles del personaje

// Estilos para el contenedor del Header
const HeaderContainer = styled.header`
  max-width: 100%;
  padding: 16px 48px;
  justify-content: space-between;
  background-color: #000000;
  color: #ffffff;
`;

// Estilos para el contenedor de FavoritesIcon y el contador de favoritos
const FavoritesContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const StyledWrapperDetail = styled.div`
  background-color: #000000;
  max-width: 100%;
  align-items: center;
`;

const Header = () => {
  // Obtiene la lista de personajes y favoritos del estado Redux
  const characters = useSelector((state) => state.characters);
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch(); // Función de despacho de Redux
  const history = useHistory(); // Historial de navegación

  // Maneja el clic en el ícono de favoritos
  const handleFavoritesClick = () => {
    // Filtra los personajes favoritos
    const favoriteCharactersNew = characters.filter((character) =>
      favorites.includes(character.id),
    );
    // Actualiza los personajes en el estado Redux y redirige a la página de favoritos
    dispatch(updateCharacters(favoriteCharactersNew));
    history.push("/favorites");
  };

  return (
    <HeaderContainer>
      {/* Componente del logo */}
      <LogoIcon />
      <StyledWrapper>
        <FavoritesContainer>
          {/* Componente del ícono de favoritos */}
          <FavoritesIcon onFavoritesClick={handleFavoritesClick} />
          {/* Muestra el número total de favoritos */}
          <span>{favorites.length}</span>
        </FavoritesContainer>
      </StyledWrapper>
      {/* Componente de detalles del personaje */}
      <StyledWrapperDetail>
        <CharacterDetails />
      </StyledWrapperDetail>
    </HeaderContainer>
  );
};

export default Header;
