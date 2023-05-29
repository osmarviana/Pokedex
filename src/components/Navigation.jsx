import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { PokemonContext } from "../context/PokemonContext";
import { ThemeContext } from "../context/theme-context";
import { ThemeSwitchButton } from "../components/ThemeSwitchButton";

export const Navigation = () => {
  const { onInputChange, valueSearch, onResetForm } =
    useContext(PokemonContext);
    
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate("/search", {
      state: valueSearch,
    });
    onResetForm();
  };

  return (
    <>
      <Container
        style={{ color: theme.tertiary, backgroundColor: theme.primary }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
          <ThemeSwitchButton />
          <Link to="/">
            <LogoPokedex
              src="https://user-images.githubusercontent.com/29473781/180619084-a56960ab-7efa-4e34-9d33-4e3e581d62ff.png"
              alt="Logo Pokédex"
            />
          </Link>
        </div>
        <div style={{ display: "flex", gap: "30px" }}>
          <Form onSubmit={onSearchSubmit}>
            <FormGroup>
              <IconSearch
                theme={theme}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </IconSearch>
              <InputSearch
                theme={theme}
                type="search"
                name="valueSearch"
                id=""
                value={valueSearch}
                onChange={onInputChange}
                placeholder="Pesquise por um Pokémon"
                style={{
                  backgroundColor: theme.primary,
                  color: theme.secondary,
                }}
              />
            </FormGroup>
            <SearchBtn theme={theme}>Pesquisar</SearchBtn>
          </Form>
        </div>
      </Container>

      <Outlet />
    </>
  );
};

const Container = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  @media (max-width: 425px) {
    justify-content: center;
  }
`;

const LogoPokedex = styled.img`
  width: 180px;
  @media (max-width: 425px) {
    margin-bottom: 15px;
  }
`;

const Form = styled.form`
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 15px;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;
const FormGroup = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 10px;
  padding: 5px 20px;
  border: 1px solid ${(props) => props.theme.tertiary};
  border-radius: 25px;
`;

const InputSearch = styled.input`
  font-family: inherit;
  width: 200px;
  border: none;
  outline: none;
  font-size: 15px;
`;

const IconSearch = styled.svg`
  width: 20px;
  height: 20px;
  stroke: ${(props) => props.theme.tertiary};
`;

const SearchBtn = styled.button`
  border: none;
  outline: none;
  border-radius: 25px;
  font-family: inherit;
  font-size: 15px;
  font-weight: bold;
  padding: 5px 20px;
  color: ${(props) => props.theme.primary};
  cursor: pointer;
  background-color: ${(props) => props.theme.tertiary};
  @media (max-width: 425px) {
    font-size: 13px;
    padding: 5px 10px;
  }
`;
