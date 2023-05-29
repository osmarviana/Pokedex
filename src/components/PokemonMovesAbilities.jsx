import React, { useState, useEffect, useContext } from "react";
import { styled } from "styled-components";
import { ThemeContext } from "../context/theme-context";

export const PokemonMovesAbilities = ({ moves, abilities }) => {
  const [abilitiesWithDescription, setAbilitiesWithDescription] = useState([]);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const fetchAbilityDescription = async () => {
      const abilitiesWithDesc = [];
      for (const ability of abilities) {
        const response = await fetch(ability.ability.url);
        const data = await response.json();
        const englishDescription = data.effect_entries.find(
          (entry) => entry.language.name === "en"
        );
        const abilityWithDesc = {
          name: ability.ability.name,
          description: englishDescription.effect,
        };
        abilitiesWithDesc.push(abilityWithDesc);
      }
      setAbilitiesWithDescription(abilitiesWithDesc);
    };

    fetchAbilityDescription();
  }, [abilities]);

  return (
    <div style={{ color: theme.tertiary, backgroundColor: theme.primary }}>
      <MovesAbilitiesContainer>
        <ContainerAbilities>
          <h2>Abilities</h2>
          <ul>
            {abilitiesWithDescription.map((ability, index) => (
              <li key={index}>
                <strong>{ability.name}:</strong> {ability.description}
              </li>
            ))}
          </ul>
        </ContainerAbilities>

        <ContainerMoves>
          <h2>Moves (top 5)</h2>
          <ul>
            {moves.slice(0, 5).map((move, index) => (
              <li key={index}>{move.move.name}</li>
            ))}
          </ul>
        </ContainerMoves>
      </MovesAbilitiesContainer>
    </div>
  );
};

const MovesAbilitiesContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  gap: 20px;
`;

const ContainerAbilities = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  & h2 {
    margin-bottom: 10px;
  }
  & li {
    margin-bottom: 10px;
    text-transform: capitalize;
    line-height: 24px;
  }
`;

const ContainerMoves = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & h2 {
    margin-bottom: 10px;
  }
  & ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  & li {
    text-transform: capitalize;
    text-align: center;
    @media (max-width: 425px) {
      font-size: 13px;
    }
  }
`;
