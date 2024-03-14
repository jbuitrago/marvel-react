import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

// Estilos para el contenedor de la tarjeta
const Card = styled.div`
  width: 70%; /* Ancho del contenedor de la tarjeta */
  display: flex; /* Utiliza flexbox para organizar los elementos internos */

  color: #ffffff; /* Color del texto dentro de la tarjeta */

  @media screen and (max-width: 768px) {
    flex-direction: column; /* Cambia la dirección del diseño en pantallas pequeñas */
  }
`;

// Estilos para la imagen dentro de la tarjeta
const Image = styled.img`
  width: 320px; /* Ancho de la imagen */
  height: 320px; /* Altura de la imagen para mantener la proporción */

  @media screen and (max-width: 768px) {
    width: 100%; /* Ocupa todo el ancho del contenedor en pantallas pequeñas */
    max-height: 300px; /* Limita la altura de la imagen para evitar que sea demasiado grande en pantallas pequeñas */
  }
`;

// Estilos para el contenido dentro de la tarjeta
const Content = styled.div`
  flex: 1; /* Hace que este div ocupe todo el espacio disponible */
  padding: 20px; /* Añade relleno al contenido */

  @media screen and (max-width: 768px) {
    padding: 20px 0; /* Reduce el espacio en los lados en pantallas pequeñas */
  }
`;

// Estilos para el título dentro de la tarjeta
const Title = styled.h2`
  font-size: 20px; /* Tamaño del título */
  margin-bottom: 10px; /* Margen inferior para separarlo del texto siguiente */

  @media screen and (max-width: 768px) {
    font-size: 18px; /* Ajusta el tamaño del título en pantallas pequeñas */
  }
`;

// Estilos para el texto dentro de la tarjeta
const Text = styled.p`
  font-size: 16px; /* Tamaño del texto */

  @media screen and (max-width: 768px) {
    font-size: 14px; /* Ajusta el tamaño del texto en pantallas pequeñas */
  }
`;

// Componente para mostrar los detalles del personaje seleccionado
const CharacterDetails = () => {
  // Obtiene los datos del store de Redux
  const characters = useSelector((state) => state.characters);
  const selectedCharacterId = useSelector((state) => state.selectedCharacter);

  // Utiliza useState para mantener los datos del personaje seleccionado
  const [selectedCharacterInfo, setSelectedCharacterInfo] = useState(null);

  // Se ejecuta cuando cambian los personajes o el personaje seleccionado
  useEffect(() => {
    // Filtra los personajes para obtener el personaje seleccionado
    const character = characters.find(
      (character) => character.id === Number(selectedCharacterId),
    );

    // Actualiza el estado con la información del personaje seleccionado
    setSelectedCharacterInfo(character);
  }, [characters, selectedCharacterId]);

  return (
    <>
      {/* Renderiza la tarjeta del personaje seleccionado si hay información */}
      {selectedCharacterInfo ? (
        <Card>
          {/* Muestra la imagen del personaje */}
          <Image
            src={`${selectedCharacterInfo.thumbnail.path}.${selectedCharacterInfo.thumbnail.extension}`}
            alt="Card Image"
          />
          <Content>
            {/* Muestra el título del personaje */}
            <Title>{selectedCharacterInfo.name}</Title>
            {/* Muestra la descripción del personaje */}
            <Text>{selectedCharacterInfo.description}</Text>
          </Content>
        </Card>
      ) : (
        <></>
      )}
    </>
  );
};

export default CharacterDetails;
