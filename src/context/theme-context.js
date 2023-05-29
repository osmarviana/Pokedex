import React, { createContext, useState, useEffect } from "react";

export const themes = {
  dark: {
    primary: "#10142f",
    secondary: "#fff",
    tertiary: "#FFE031",
    iconSwitchBG: "#a2adfa",
    iconSwitchColor: "#4052D9",
  },
  light: {
    primary: "#fff",
    secondary: "#10142f",
    tertiary: "#4052D9",
    iconSwitchBG: "#FFE031",
    iconSwitchColor: "#4052D9",
  },
};

export const ThemeContext = createContext({
  theme: themes.light,
  setTheme: () => {},
});

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(themes.light);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(JSON.parse(savedTheme));
    }
  }, []);

  const handleSetTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", JSON.stringify(newTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
