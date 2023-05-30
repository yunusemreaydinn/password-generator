import React, { useState } from 'react';

interface Theme{
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const Theme: React.FC<Theme> = ({darkMode, toggleDarkMode}) => {
  

  return (
    <div>
      <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      <button onClick={toggleDarkMode}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
};

export default Theme;