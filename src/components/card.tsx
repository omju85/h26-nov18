import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useToggle } from "../hooks/useToggle";

type CardProps = {
  title: string;
  text: string;
};

export function Card({ title, text }: CardProps) {
  const themeCtx = useContext(ThemeContext);
  const [open, toggleOpen] = useToggle();

  return (
    <div className="card">
      <h2>{title}</h2>
      <button onClick={toggleOpen}>{open ? "fela" : "Sýna meira"}</button>
      {open && <p>{text}</p>}
      <small>Núverandi þema er {themeCtx?.theme}</small>
    </div>
  );
}
