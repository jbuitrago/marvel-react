import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CharacterList from "../components/ListView/CharacterList"; // Importa el componente de lista de personajes
import styled from "styled-components";
import TitleComponent from "../components/Common/Title"; // Importa el componente de título
import {
  searchCharactersRequest,
  selectCharacter,
} from "../redux/actions/actions"; // Importa las acciones necesarias
import SearchBar from "../components/ListView/SearchBar"; // Importa la barra de búsqueda

const StyledListViewContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
`;

const FavoritesViewContainer = () => {
  const dispatch = useDispatch(); // Función de despacho de Redux
  const favoritesCharacters = useSelector((state) => state.favoritesCharacters); // Obtiene la lista de personajes favoritos del estado Redux
  const [searchQuery, setSearchQuery] = useState(""); // Estado para el query de búsqueda

  useEffect(() => {
    dispatch(selectCharacter(null)); // Selecciona el personaje actual como nulo al montar el componente
  }, [dispatch]);

  const handleSearch = () => {
    // Función para manejar la búsqueda
    dispatch(searchCharactersRequest(searchQuery)); // Realiza una solicitud de búsqueda con el query
  };

  return (
    <StyledListViewContainer>
      {/* Componente de título para mostrar "FAVORITES" */}
      <TitleComponent title={"FAVORITES"} />
      {/* Barra de búsqueda */}
      <SearchBar setSearchQuery={setSearchQuery} handleSearch={handleSearch} />
      {/* Componente de lista de personajes favoritos */}
      <CharacterList characters={favoritesCharacters || []} />
    </StyledListViewContainer>
  );
};

export default FavoritesViewContainer;
