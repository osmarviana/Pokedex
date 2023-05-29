import React from "react";
import { AppRouter } from "./AppRouter";
import { PokemonProvider } from "./context/PokemonProvider";
import { ThemeProvider } from "./context/theme-context";
import { createGlobalStyle } from "styled-components";

export function App() {
  return (
    <>
      <ThemeProvider>
        <PokemonProvider>
          <GlobalStyle />
          <AppRouter />
        </PokemonProvider>
      </ThemeProvider>
    </>
  );
}

const GlobalStyle = createGlobalStyle`

  	html{
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	font-family: 'Ubuntu', sans-serif;
  	}

	body {
		width: 100vw;
		height: 100vh;
    	margin: 0 auto;
	}

  	*{
		margin: 0;
		padding: 0;
		border: none;
		outline: none;
		box-sizing: border-box;
	}

	a{
		text-decoration: none;
		color: #000000;
	}
  
	ul{
		list-style: none;
	}
`;
