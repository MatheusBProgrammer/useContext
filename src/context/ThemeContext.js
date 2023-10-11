import React from "react";
import { createContext, useState } from "react";

// 1. Cria um novo contexto para o tema
export const ThemeContext = createContext();

// 2. Cria o provedor de tema que envolverá os componentes
export const ThemeProvider = ({ children }) => {
  // 3. Define o estado inicial do tema como "light"
  const [theme, setTheme] = useState("light");

  // 4. Cria uma função para alternar o tema entre "light" e "dark"
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // 5. Retorna o provedor de contexto com o valor atual do tema e a função de alternância
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
