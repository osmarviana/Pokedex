import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";
import { CardPokemon } from "../components/CardPokemon";
import { ThemeContext } from "../context/theme-context";

export const SearchPage = () => {
  const { theme } = useContext(ThemeContext);
  const location = useLocation();
  const { getPokemonsByName } = useContext(PokemonContext);
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    const searchPokemon = async () => {
      const pokemons = await getPokemonsByName(location.state);
      setFilteredPokemons(pokemons);
    };

    searchPokemon();
  }, [location.state, getPokemonsByName]);

  return (
    <Container
      style={{ color: theme.tertiary, backgroundColor: theme.primary }}
    >
      <p>
        <span theme={theme}>results: {filteredPokemons.length}</span>
      </p>
      <CardListPokemon>
        {filteredPokemons.map((pokemon) => (
          <CardPokemon pokemon={pokemon} key={pokemon.id} />
        ))}
      </CardListPokemon>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  padding: 30px;
  & p {
    font-size: 18px;
    font-weight: 500;
    color: ${(props) => props.theme.tertiary};
  }
`;

const CardListPokemon = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 30px;
  gap: 30px;
`;
