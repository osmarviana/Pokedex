import React, { useContext } from "react";
import { ThreeBody } from "@uiball/loaders";
import { styled } from "styled-components";
import { ThemeContext } from "../context/theme-context";

export const Loader = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={{ color: theme.tertiary, backgroundColor: theme.primary }}>
      <Container>
        <ThreeBody theme={theme} size={35} speed={1.1} color={theme.tertiary} />
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 200px 0;
`;
