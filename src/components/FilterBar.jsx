import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import styled from "styled-components";
import { ThemeContext } from "../context/theme-context";
import { images } from "../context/types-images";

const names = [
  "bug",
  "dark",
  "dragon",
  "electric",
  "fairy",
  "fighting",
  "fire",
  "flying",
  "ghost",
  "grass",
  "ground",
  "ice",
  "normal",
  "poison",
  "psychic",
  "rock",
  "steel",
  "water",
];

const getTypeImage = (name) => {
  const image = images[name];
  if (image) {
    return <img src={image} alt={name} />;
  }
  return null;
};

export const FilterBar = () => {
  const { handleSelectCheckBox } = useContext(PokemonContext);
  const { theme } = useContext(ThemeContext);

  const structures = names.map((name) => (
    <GroupType className={name} key={name} theme={theme}>
      <input
        type="checkbox"
        name={name}
        id={name}
        style={{ display: "none" }}
        onChange={handleSelectCheckBox}
      />

      <label theme={theme} htmlFor={name}>
        <TypeIcon>{getTypeImage(name)}</TypeIcon>
        {name}
      </label>
    </GroupType>
  ));

  return (
    <div style={{ color: theme.tertiary, backgroundColor: theme.primary }}>
      <ContainerFilters theme={theme}>
        <FilterByType theme={theme}>{structures}</FilterByType>
      </ContainerFilters>
    </div>
  );
};

const ContainerFilters = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 180px;
  height: 100px;
  padding: 20px;

  @media (max-width: 425px) {
    height: 200px;
    top: 200px;
  }
  @media (max-width: 320px) {
    height: 220px;
    top: 200px;
  }
`;

const FilterByType = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

const TypeIcon = styled.span`
  & img {
    width: 20px;
    height: 20px;
    @media (max-width: 425px) {
      width: 10px;
      height: 10px;
    }
  }
`;

const GroupType = styled.div`
  user-select: none;
  border-radius: 5px;
  & label {
    cursor: pointer;
    color: #fff;
    text-shadow: 1px 1px 1px #000;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    border-radius: 5px;
    padding: 2px 5px;
    @media (max-width: 425px) {
      font-size: 12px;
    }
    @media (max-width: 320px) {
      font-size: 10px;
    }
  }

  & label.selected {
    border: 2px solid ${(props) => props.theme.secondary};
  }

  &.normal {
    background: radial-gradient(
      circle,
      rgba(200, 204, 208, 1) 0%,
      rgba(187, 188, 190, 1) 35%,
      rgba(145, 148, 150, 1) 100%
    );
  }

  &.grass {
    background: radial-gradient(
      circle,
      rgba(176, 217, 178, 1) 0%,
      rgba(137, 196, 131, 1) 35%,
      rgba(64, 149, 70, 1) 100%
    );
  }

  &.fire {
    background: radial-gradient(
      circle,
      rgba(251, 188, 109, 1) 0%,
      rgba(255, 156, 84, 1) 35%,
      rgba(249, 140, 3, 1) 100%
    );
  }

  &.water {
    background: radial-gradient(
      circle,
      rgba(114, 162, 215, 1) 0%,
      rgba(80, 144, 214, 1) 35%,
      rgba(13, 123, 242, 1) 100%
    );
  }

  &.electric {
    background: radial-gradient(
      circle,
      rgba(241, 225, 154, 1) 0%,
      rgba(236, 212, 106, 1) 35%,
      rgba(242, 205, 40, 1) 100%
    );
  }

  &.ground {
    background: radial-gradient(
      circle,
      rgba(217, 167, 141, 1) 0%,
      rgba(217, 144, 106, 1) 35%,
      rgba(217, 120, 69, 1) 100%
    );
  }

  &.bug {
    background: radial-gradient(
      circle,
      rgba(203, 233, 141, 1) 0%,
      rgba(176, 217, 94, 1) 35%,
      rgba(145, 193, 47, 1) 100%
    );
  }

  &.flying {
    background: radial-gradient(
      circle,
      rgba(202, 216, 247, 1) 0%,
      rgba(170, 187, 226, 1) 35%,
      rgba(146, 170, 222, 1) 100%
    );
  }

  &.fighting {
    background: radial-gradient(
      circle,
      rgba(231, 128, 158, 1) 0%,
      rgba(219, 100, 136, 1) 35%,
      rgba(206, 65, 107, 1) 100%
    );
  }

  &.poison {
    background: radial-gradient(
      circle,
      rgba(170, 107, 200, 1) 0%,
      rgba(163, 80, 203, 1) 35%,
      rgba(150, 46, 200, 1) 100%
    );
  }

  &.ice {
    background: radial-gradient(
      circle,
      rgba(141, 226, 212, 1) 0%,
      rgba(115, 206, 192, 1) 35%,
      rgba(70, 187, 169, 1) 100%
    );
  }

  &.dark {
    background: radial-gradient(
      circle,
      rgba(52, 62, 58, 1) 0%,
      rgba(33, 37, 36, 1) 35%,
      rgba(20, 20, 20, 1) 100%
    );
    border: 1px solid rgb(52, 62, 58);
  }

  &.steel {
    background: radial-gradient(
      circle,
      rgba(149, 175, 162, 1) 0%,
      rgba(122, 163, 142, 1) 35%,
      rgba(94, 126, 110, 1) 100%
    );
  }

  &.rock {
    background: radial-gradient(
      circle,
      rgba(201, 191, 158, 1) 0%,
      rgba(197, 183, 140, 1) 35%,
      rgba(164, 153, 118, 1) 100%
    );
  }

  &.psychic {
    background: radial-gradient(
      circle,
      rgba(250, 173, 178, 1) 0%,
      rgba(250, 147, 153, 1) 35%,
      rgba(250, 113, 121, 1) 100%
    );
  }

  &.ghost {
    background: radial-gradient(
      circle,
      rgba(82, 105, 173, 1) 0%,
      rgba(66, 83, 136, 1) 35%,
      rgba(41, 53, 87, 1) 100%
    );
  }

  &.shadow {
    background: radial-gradient(
      circle,
      rgba(75, 74, 74, 1) 0%,
      rgba(42, 42, 42, 1) 35%,
      rgba(19, 19, 19, 1) 100%
    );
  }

  &.fairy {
    background: radial-gradient(
      circle,
      rgba(198, 109, 198, 1) 0%,
      rgba(172, 82, 172, 1) 35%,
      rgba(149, 47, 149, 1) 100%
    );
  }

  &.dragon {
    background: radial-gradient(
      circle,
      rgba(58, 123, 149, 1) 0%,
      rgba(37, 85, 113, 1) 35%,
      rgba(25, 82, 121, 1) 100%
    );
  }

  &.unknown {
    background-color: #fff;
  }
`;
