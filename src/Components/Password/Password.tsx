import React from 'react';

interface PasswordProps {
  password: string;
}

const Password: React.FC<PasswordProps> = ({ password }) => {
  return (
    <div className="password-section">
      <p className='generated'>Generated Password: </p>
      <p className='pw'>{password}</p>
    </div>
  );
};

export default Password;