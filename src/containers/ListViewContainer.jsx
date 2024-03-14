import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCharactersRequest,
  searchCharactersRequest,
  selectCharacter,
} from "../redux/actions/actions"; // Importa las acciones necesarias
import CharacterList from "../components/ListView/CharacterList"; // Importa el componente de lista de personajes
import styled from "styled-components";
import SearchBar from "../components/ListView/SearchBar"; // Importa la barra de búsqueda

const StyledListViewContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
`;

const ListViewContainer = () => {
  const dispatch = useDispatch(); // Función de despacho de Redux
  const characters = useSelector((state) => state.characters); // Obtiene la lista de personajes del estado Redux
  const [searchQuery, setSearchQuery] = useState(""); // Estado para el query de búsqueda

  useEffect(() => {
    dispatch(selectCharacter(null)); // Selecciona el personaje actual como nulo al montar el componente
    dispatch(fetchCharactersRequest()); // Realiza una solicitud para obtener la lista de personajes
  }, [dispatch]);

  const handleSearch = () => {
    // Función para manejar la búsqueda
    dispatch(searchCharactersRequest(searchQuery)); // Realiza una solicitud de búsqueda con el query
  };

  const favorites = useSelector((state) => state.favorites); // Obtiene la lista de favoritos del estado Redux

  useEffect(() => {}, [favorites]); // Efecto para la lista de favoritos

  return (
    <StyledListViewContainer>
      {/* Barra de búsqueda */}
      <SearchBar setSearchQuery={setSearchQuery} handleSearch={handleSearch} />
      {/* Componente de lista de personajes */}
      <CharacterList characters={characters || []} />
    </StyledListViewContainer>
  );
};

export default ListViewContainer;
