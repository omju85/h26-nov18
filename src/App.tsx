import { useContext } from "react";
import "./App.css";
import { ThemeContext } from "./context/ThemeContext";
import { Header } from "./components/Header";
import { Card } from "./components/card";

function App() {
  const themeCtx = useContext(ThemeContext);

  return (
    <div className={`app ${themeCtx?.theme}`}>
      <Header />
      <main className="cards">
        <Card title="Context" text="Deilir gögnum án prop drilling" />
        <Card
          title="Custom hooks"
          text="Endurnýta lógíkina á milli componenta"
        />
      </main>
    </div>
  );
}

export default App;
