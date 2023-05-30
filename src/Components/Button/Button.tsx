import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: string,
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <button type='button' onClick={onClick}>{children}</button>;
};

export default Button;