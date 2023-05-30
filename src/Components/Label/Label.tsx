import React from 'react';
import './Label.css'

interface InputLabelProps {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}

const Label: React.FC<InputLabelProps> = ({ label, value, min, max, onChange }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = parseInt(event.target.value);
    if (inputValue < min) {
      inputValue = min;
    } else if (inputValue > max) {
      inputValue = max;
    }
    onChange(inputValue);
  };

  return (
    <div className="input-label">
      <label htmlFor={label}>{label}:</label>
      <input
        type="number"
        id={label}
        min={min}
        max={max}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Label;