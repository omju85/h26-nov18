import { type ReactNode } from "react";
import { ThemeContext, type Theme } from "./ThemeContext";
import { useLocalStarage } from "../hooks/useLocalStorage";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useLocalStarage<Theme>("theme", "light");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {" "}
      {children}{" "}
    </ThemeContext.Provider>
  );
}
