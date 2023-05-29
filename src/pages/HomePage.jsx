import React, { useContext, useRef } from "react";
import { PokemonList } from "../components/PokemonList";
import { FilterBar } from "../components/FilterBar";
import { styled } from "styled-components";
import { ThemeContext } from "../context/theme-context";
import { PokemonContext } from "../context/PokemonContext";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export const HomePage = () => {
  const { theme } = useContext(ThemeContext);
  const { handleClickLoadMore } = useContext(PokemonContext);
  const topRef = useRef(null);

  const handleScrollToTop = () => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ color: theme.tertiary, backgroundColor: theme.primary }}>
      <ContainerFilter ref={topRef}>
        <IconFilter>
          <span>Filter</span>
        </IconFilter>
      </ContainerFilter>

      <PokemonList />
      <FilterBar />
      <ContainerLoadMore theme={theme}>
        <ButtonLoad theme={theme} onClick={handleClickLoadMore}>
          + Pokémons
        </ButtonLoad>
      </ContainerLoadMore>
      <ContainerButtonToTop theme={theme}>
        <ButtonToTop theme={theme} onClick={handleScrollToTop}>
          <BsFillArrowUpCircleFill theme={theme} />
        </ButtonToTop>
      </ContainerButtonToTop>
    </div>
  );
};

const ContainerFilter = styled.div`
  height: 150px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 50px;
  @media (max-width: 425px) {
    padding: 20px;
  }
`;

const IconFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  cursor: pointer;
  & span {
    color: ${(props) => props.theme.tertiary};
    font-weight: bold;
    font-size: 20px;
  }
`;

const ContainerLoadMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const ButtonLoad = styled.button`
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.tertiary};
  color: ${(props) => props.theme.primary};
  font-weight: bold;
  font-size: 16px;
  padding: 10px 20px;
  margin-bottom: 20px;
  cursor: pointer;
`;

const ContainerButtonToTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-left: 30px;
`;

const ButtonToTop = styled.button`
  font-size: 40px;
  color: ${(props) => props.theme.tertiary};
  background-color: ${(props) => props.theme.primary};
  cursor: pointer;
  margin-bottom: 20px;
`;
