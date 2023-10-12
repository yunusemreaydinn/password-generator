import React from "react";

interface Theme {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Theme: React.FC<Theme> = ({ darkMode, toggleDarkMode }) => {
  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className="theme">
      <button className={`theme-toggle ${darkMode ? 'dark' : 'light'}`} onClick={toggleDarkMode}>
        <div className="circle"></div>
      </button>
    </div>
  );
};

export default Theme;
