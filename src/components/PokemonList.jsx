import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { styled } from "styled-components";
import { CardPokemon } from "./CardPokemon";
import { Loader } from "./Loader";
import { ThemeContext } from "../context/theme-context";

export const PokemonList = () => {
  const { allPokemons, loading, filteredPokemons } = useContext(PokemonContext);

  const { theme } = useContext(ThemeContext);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <CardListPokemon
          style={{ color: theme.tertiary, backgroundColor: theme.primary }}
        >
          {filteredPokemons.length ? (
            <>
              {filteredPokemons.map((pokemon) => (
                <CardPokemon pokemon={pokemon} key={pokemon.id} />
              ))}
            </>
          ) : (
            <>
              {allPokemons.map((pokemon) => (
                <CardPokemon pokemon={pokemon} key={pokemon.id} />
              ))}
            </>
          )}
        </CardListPokemon>
      )}
    </>
  );
};

const CardListPokemon = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 30px;
  gap: 30px;
`;
