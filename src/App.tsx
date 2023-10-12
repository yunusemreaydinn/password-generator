import { useState } from "react";
import "./App.css";
import Theme from "./Components/Theme/Theme";
import Home from "./Pages/Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="main">
      <Theme darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home />
    </div>
  );
}

export default App;
