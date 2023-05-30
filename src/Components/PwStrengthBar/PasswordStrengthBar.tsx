import React, { useEffect, useState } from 'react';
import './PasswordStrengthBar.css';

interface PasswordStrengthBarProps {
  password: string;
}

const PasswordStrengthBar: React.FC<PasswordStrengthBarProps> = ({ password }) => {
  const [strength, setStrength] = useState(0);

  useEffect(() => {
    const calculateStrength = (password: string): number => {
      const lengthStrength = Math.min(password.length / 16 * 100, 100);
      return lengthStrength;
    };

    const strength = calculateStrength(password);
    setStrength(strength);
  }, [password]);

  return (
    <div className="password-strength-bar">
      <div
        className="bar"
        style={{ width: `${strength}%`, backgroundColor: getColorByStrength(strength) }}
      />
      <div className="bar-label">Password Strength: {strength.toFixed(0)}%</div>
    </div>
  );
};

const getColorByStrength = (strength: number): string => {
  if (strength >= 70) {
    return 'green';
  } else if (strength >= 40) {
    return 'orange';
  } else {
    return 'red';
  }
};

export default PasswordStrengthBar;