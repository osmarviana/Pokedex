import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { images } from "../context/types-images";
import { ThemeContext } from "../context/theme-context";

export const CardPokemon = ({ pokemon }) => {
  const { theme } = useContext(ThemeContext);

  const getFirstType = () => {
    if (pokemon.types && pokemon.types.length > 0) {
      return pokemon.types[0].type.name;
    }
    return "";
  };

  const getBackgroundColor = () => {
    const firstType = getFirstType();
    return firstType ? firstType : "unknown";
  };

  const getTypeImage = (type) => {
    switch (type) {
      case "bug":
        return <img src={images.bug} alt="Bug" />;
      case "dark":
        return <img src={images.dark} alt="Dark" />;
      case "dragon":
        return <img src={images.dragon} alt="Dragon" />;
      case "electric":
        return <img src={images.electric} alt="Electric" />;
      case "fairy":
        return <img src={images.fairy} alt="Fairy" />;
      case "fighting":
        return <img src={images.fighting} alt="Fighting" />;
      case "fire":
        return <img src={images.fire} alt="Fire" />;
      case "flying":
        return <img src={images.flying} alt="Flying" />;
      case "ghost":
        return <img src={images.ghost} alt="Ghost" />;
      case "grass":
        return <img src={images.grass} alt="Grass" />;
      case "ground":
        return <img src={images.ground} alt="Ground" />;
      case "ice":
        return <img src={images.ice} alt="Ice" />;
      case "normal":
        return <img src={images.normal} alt="Normal" />;
      case "poison":
        return <img src={images.poison} alt="Poison" />;
      case "psychic":
        return <img src={images.psychic} alt="Psychic" />;
      case "rock":
        return <img src={images.rock} alt="Rock" />;
      case "steel":
        return <img src={images.steel} alt="Steel" />;
      case "water":
        return <img src={images.water} alt="Water" />;
      default:
        return null;
    }
  };

  return (
    <Link to={`/pokemon/${pokemon.id}`}>
      {" "}
      <CardContainer
        style={{ color: theme.tertiary, backgroundColor: theme.primary }}
      >
        <Header>
          <PokemonID key={pokemon.id}>#{pokemon.id}</PokemonID>
          <StatsBox>
            {pokemon.stats
              .filter((stat) => stat.stat.name === "hp")
              .map((stat) => (
                <PokemonStats key={stat.stat.name}>
                  <span>Hp</span>
                  {stat.base_stat}
                </PokemonStats>
              ))}
          </StatsBox>
        </Header>
        <CardImage className={getBackgroundColor()}>
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
          />
        </CardImage>
        <CardInfo>
          <PokemonName>{pokemon.name}</PokemonName>
          <TypesBox>
            {pokemon.types.map((type) => (
              <PokemonTypes key={type.type.name} className={type.type.name}>
                <TypeIcon>{getTypeImage(type.type.name)}</TypeIcon>
                <TypeName>{type.type.name}</TypeName>
              </PokemonTypes>
            ))}
          </TypesBox>
        </CardInfo>
      </CardContainer>
    </Link>
  );
};

const CardContainer = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  background: url("https://img.freepik.com/vetores-premium/fundo-de-textura-metalica-branca-abstrata-para-banner-de-site-e-design-grafico-decorativo-moderno_120819-582.jpg")
    border-box;
  border: 12px solid transparent;
  border-image: url("https://thumbs.dreamstime.com/b/fundo-escovado-da-textura-do-metal-ouro-104472156.jpg")
    30 round;
  box-shadow: 2px 3px 5px #444;
  padding: 0 20px 20px;

  @media (max-width: 375px) {
    width: 280px;
    height: 380px;
  }

  & .normal {
    background: radial-gradient(
      circle,
      rgba(200, 204, 208, 1) 0%,
      rgba(187, 188, 190, 1) 35%,
      rgba(145, 148, 150, 1) 100%
    );
  }

  & .grass {
    background: radial-gradient(
      circle,
      rgba(176, 217, 178, 1) 0%,
      rgba(137, 196, 131, 1) 35%,
      rgba(64, 149, 70, 1) 100%
    );
  }

  & .fire {
    background: radial-gradient(
      circle,
      rgba(251, 188, 109, 1) 0%,
      rgba(255, 156, 84, 1) 35%,
      rgba(249, 140, 3, 1) 100%
    );
  }

  & .water {
    background: radial-gradient(
      circle,
      rgba(114, 162, 215, 1) 0%,
      rgba(80, 144, 214, 1) 35%,
      rgba(13, 123, 242, 1) 100%
    );
  }

  & .electric {
    background: radial-gradient(
      circle,
      rgba(241, 225, 154, 1) 0%,
      rgba(236, 212, 106, 1) 35%,
      rgba(242, 205, 40, 1) 100%
    );
  }

  & .ground {
    background: radial-gradient(
      circle,
      rgba(217, 167, 141, 1) 0%,
      rgba(217, 144, 106, 1) 35%,
      rgba(217, 120, 69, 1) 100%
    );
  }

  & .bug {
    background: radial-gradient(
      circle,
      rgba(203, 233, 141, 1) 0%,
      rgba(176, 217, 94, 1) 35%,
      rgba(145, 193, 47, 1) 100%
    );
  }

  & .flying {
    background: radial-gradient(
      circle,
      rgba(202, 216, 247, 1) 0%,
      rgba(170, 187, 226, 1) 35%,
      rgba(146, 170, 222, 1) 100%
    );
  }

  & .fighting {
    background: radial-gradient(
      circle,
      rgba(231, 128, 158, 1) 0%,
      rgba(219, 100, 136, 1) 35%,
      rgba(206, 65, 107, 1) 100%
    );
  }

  & .poison {
    background: radial-gradient(
      circle,
      rgba(170, 107, 200, 1) 0%,
      rgba(163, 80, 203, 1) 35%,
      rgba(150, 46, 200, 1) 100%
    );
  }

  & .ice {
    background: radial-gradient(
      circle,
      rgba(141, 226, 212, 1) 0%,
      rgba(115, 206, 192, 1) 35%,
      rgba(70, 187, 169, 1) 100%
    );
  }

  & .dark {
    background: radial-gradient(
      circle,
      rgba(52, 62, 58, 1) 0%,
      rgba(33, 37, 36, 1) 35%,
      rgba(9, 9, 9, 1) 100%
    );
  }

  & .steel {
    background: radial-gradient(
      circle,
      rgba(149, 175, 162, 1) 0%,
      rgba(122, 163, 142, 1) 35%,
      rgba(94, 126, 110, 1) 100%
    );
  }

  & .rock {
    background: radial-gradient(
      circle,
      rgba(201, 191, 158, 1) 0%,
      rgba(197, 183, 140, 1) 35%,
      rgba(164, 153, 118, 1) 100%
    );
  }

  & .psychic {
    background: radial-gradient(
      circle,
      rgba(250, 173, 178, 1) 0%,
      rgba(250, 147, 153, 1) 35%,
      rgba(250, 113, 121, 1) 100%
    );
  }

  & .ghost {
    background: radial-gradient(
      circle,
      rgba(82, 105, 173, 1) 0%,
      rgba(66, 83, 136, 1) 35%,
      rgba(41, 53, 87, 1) 100%
    );
  }

  & .shadow {
    background: radial-gradient(
      circle,
      rgba(75, 74, 74, 1) 0%,
      rgba(42, 42, 42, 1) 35%,
      rgba(19, 19, 19, 1) 100%
    );
  }

  & .fairy {
    background: radial-gradient(
      circle,
      rgba(198, 109, 198, 1) 0%,
      rgba(172, 82, 172, 1) 35%,
      rgba(149, 47, 149, 1) 100%
    );
  }

  & .dragon {
    background: radial-gradient(
      circle,
      rgba(58, 149, 134, 1) 0%,
      rgba(37, 107, 113, 1) 35%,
      rgba(37, 47, 113, 1) 100%
    );
  }

  & .unknown {
    background-color: var(--unknown);
  }
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  color: transparent;
  background: url("https://thumbs.dreamstime.com/b/fundo-escovado-da-textura-do-metal-ouro-104472156.jpg")
    padding-box;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const PokemonID = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const StatsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PokemonStats = styled.span`
  font-style: normal;
  font-size: 13px;
  font-weight: bold;
  color: black;
  & span {
    font-weight: bold;
  }
`;

const CardImage = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  & img {
    width: 220px;
    height: 220px;
    margin-bottom: 10px;
    padding: 10px;
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const PokemonName = styled.span`
  font-size: 24px;
  text-transform: capitalize;
  font-weight: bold;
  margin-top: 10px;
  color: transparent;
  background: url("https://thumbs.dreamstime.com/b/fundo-escovado-da-textura-do-metal-ouro-104472156.jpg")
    padding-box;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TypesBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const PokemonTypes = styled.div`
  width: 80px;
  box-shadow: 1px 1px 1px #999;
  padding: 3px 5px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
`;

const TypeIcon = styled.span`
  & img {
    width: 20px;
    height: 20px;
  }
`;

const TypeName = styled.span`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  text-shadow: 1px 1px 1px #000;
`;
