import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export function ThemeButton() {
  const themeCtx = useContext(ThemeContext);
  if (!themeCtx) return null;

  return (
    <button onClick={themeCtx.toggleTheme}>
      {themeCtx.theme === "light" ? "Skipta í dökkt" : "Skipta í ljóst"}
    </button>
  );
}
