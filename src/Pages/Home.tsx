import { useState } from "react";
import PasswordStrengthBar from "../Components/PwStrengthBar/PasswordStrengthBar";
import Input from "../Components/Input/Input";
import Password from "../Components/Password/Password";

const Home = () => {
  const [password, setPassword] = useState("");

  return (
    <div>
      <h2 className="title">Random Password Generator</h2>

      <Input password={password} setPassword={setPassword} />

      <PasswordStrengthBar password={password} />

      <Password password={password} />
    </div>
  );
};

export default Home;
