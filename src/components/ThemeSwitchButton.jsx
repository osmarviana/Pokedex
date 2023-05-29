import React, { useContext } from "react";
import { ThemeContext, themes } from "../context/theme-context";
import styled from "styled-components";
import { FaMoon } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";

export const ThemeSwitchButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div style={{ color: theme.primary, backgroundColor: theme.primary }}>
      <ButtonTheme>
        <StyledButton
          theme={theme}
          onClick={() =>
            setTheme(theme === themes.light ? themes.dark : themes.light)
          }
        >
          {theme === themes.dark ? <FaMoon /> : <BsFillSunFill />}
        </StyledButton>
      </ButtonTheme>
    </div>
  );
};

export const ButtonTheme = styled.div`
  align-self: flex-end;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  outline: 0;
  @media (max-width: 425px) {
    width: 30px;
    height: 30px;
  }
`;

export const StyledButton = styled.button`
  background: ${(props) => props.theme.iconSwitchColor};
  color: ${(props) => props.theme.iconSwitchBG};
  font-size: 22px;
  width: 100%;
  min-width: 100%;
  height: 100%;
  padding: 5px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: 0;
`;
