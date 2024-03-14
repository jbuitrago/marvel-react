import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { debounce } from "lodash";

// Contenedor de la barra de búsqueda
const SearchBarContainer = styled.div`
  max-width: 100%;
  height: 77px;
  padding: 12px 48px;
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;

// Input de la barra de búsqueda
const SearchInput = styled.input`
  width: 1416px;
  height: 27px;
  padding: 0 32px 8px 0;
  border: 0;
  border-bottom: 1px solid #000000;
  gap: 12px;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  background-image: url("/path/to/search-icon.svg"); /* Icono de búsqueda */
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 16px;
  outline: none;
`;

// Etiqueta para mostrar el número total de resultados
const ResultLabel = styled.div`
  font-size: 14px;
  color: #666666;
`;

// Componente de la barra de búsqueda
const SearchBar = ({ setSearchQuery, handleSearch }) => {
  // Estado local para el término de búsqueda
  const [searchTerm, setSearchTerm] = useState("");
  // Selector para obtener el número total de resultados del estado Redux
  const totalResults = useSelector((state) => state.totalResults);

  // Maneja el cambio en el término de búsqueda
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    // Si la longitud del término de búsqueda es mayor o igual a 2, realiza una búsqueda
    if (event.target.value.length >= 2) {
      setSearchQuery(event.target.value);
      handleSearch();
    }
    // Llama a la función de búsqueda con un retraso utilizando lodash debounce
    delayedSearch(event.target.value);
  };

  // Función de búsqueda con retraso
  const delayedSearch = debounce((value) => {
    setSearchQuery(value);
    handleSearch();
  }, 300);

  return (
    <SearchBarContainer>
      {/* Input de la barra de búsqueda */}
      <SearchInput
        type="text"
        placeholder="Search..." // Placeholder del input
        value={searchTerm}
        onChange={handleSearchChange} // Maneja el cambio en el input
      />
      {/* Muestra el número total de resultados */}
      <ResultLabel>{totalResults}</ResultLabel>
    </SearchBarContainer>
  );
};

export default SearchBar;
