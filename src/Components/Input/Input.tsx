import React, { useState } from "react";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import CheckboxGroup from "../CheckboxGroup/CheckboxGroup";
import _ from "lodash";


interface PasswordInputsProps {
  passwordLength: number;
  onPasswordLengthChange: (value: number) => void;
  onGeneratePassword: () => void;
  easyToRead: boolean;
  includeNumbers: boolean;
  setIncludeNumbers: (value: boolean) => void;
  includeSymbols: boolean;
  setIncludeSymbols: (value: boolean) => void;
  includeUppercase: boolean;
  setIncludeUppercase: (value: boolean) => void;
  includeLowercase: boolean;
  setIncludeLowercase: (value: boolean) => void;
  includeAll: boolean;
  onIncludeAllChange: (value: boolean) => void;
  onEasyToReadChange: (value: boolean) => void;
}

interface Password {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const PasswordInputs: React.FC<Password> = ({password, setPassword}) => {
  const handlePasswordLengthChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let length = parseInt(event.target.value);
    if (length < 8) {
      length = 8;
    } else if (length > 50) {
      length = 50;
    }
    setPasswordLength(length);
  };

  const [passwordLength, setPasswordLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [easyToRead, setEasyToRead] = useState(false);
  const [includesAll, setIncludesAll] = useState(false);

  const generatePassword = () => {
    let length = passwordLength;
    if (length < 8) {
      length = 8;
      setPasswordLength(8);
    }

    let chars = "";
    if (includeNumbers) chars += "0123456789";
    if (includeSymbols) chars += "!@#$%^&*()";
    if (includeUppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (easyToRead) chars += "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz";
    if (includesAll) {
      if (!includeNumbers) chars += "0123456789";
      if (!includeSymbols) chars += "!@#$%^&*()";
      if (!includeUppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if (!includeLowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    }

    const generatedPassword = _.sampleSize(chars, length).join("");
    setPassword("");
    setTimeout(() => setPassword(generatedPassword), 500);
  };

  const handleEasyToReadChange = () => {
    setEasyToRead(!easyToRead);
    if (!easyToRead) {
      setIncludesAll(false);
      setIncludeNumbers(false);
      setIncludeSymbols(false);
      setIncludeUppercase(false);
      setIncludeLowercase(false);
    }
  };

  const handleIncludesAllChange = () => {
    setIncludesAll(!includesAll);
    if (!includesAll) {
      setEasyToRead(false);
      setIncludeNumbers(false);
      setIncludeSymbols(false);
      setIncludeUppercase(false);
      setIncludeLowercase(false);
    }
  };

  return (
    <div className="password-inputs">
      <div className="range-bar">
        <div className="length"><label htmlFor="password-length">Password Length: </label>{passwordLength}</div>
        <input
          type="range"
          id="password-length"
          min={8}
          max={50}
          value={passwordLength}
          onChange={handlePasswordLengthChange}
        />
      </div>
      <CheckboxGroup
        includeNumbers={includeNumbers}
        setIncludeNumbers={setIncludeNumbers}
        includeSymbols={includeSymbols}
        setIncludeSymbols={setIncludeSymbols}
        includeUppercase={includeUppercase}
        setIncludeUppercase={setIncludeUppercase}
        includeLowercase={includeLowercase}
        setIncludeLowercase={setIncludeLowercase}
        easyToRead={easyToRead}
      />
      <Checkbox label="Include All" checked={includesAll} onChange={handleIncludesAllChange} />
      <Checkbox label="Easy to Read" checked={easyToRead} onChange={handleEasyToReadChange} />
      <Button onClick={generatePassword}>Generate Password</Button>
    </div>
  );
};

export default PasswordInputs;
