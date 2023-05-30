import React, { useState } from "react";
import "./App.css";
import PasswordStrengthBar from "./Components/PwStrengthBar/PasswordStrengthBar";
import Input from "./Components/Input/Input";
import Password from "./Components/Password/Password";
import Theme from "./Components/Theme/Theme";

function App() {

  const [password, setPassword] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  return (
      <div className="main">
      <h1 className="title">Random Password Generator</h1>

      <Input password={password} setPassword={setPassword} />

      <PasswordStrengthBar password={password} />

      <Password password={password} />

    </div>
  );
}

export default App;
