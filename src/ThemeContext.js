import { useState, createContext } from "react";

//
const ThemeContext = createContext();
// console.log(themeContext); // objects consumer & provider

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }; // HomeLayout className

  const value = {
    theme,
    toggleTheme,
  };

  //
  return (
    <ThemeProvider.Provider value={value}>{children}</ThemeProvider.Provider>
  );
}

export { ThemeContext, ThemeProvider };
