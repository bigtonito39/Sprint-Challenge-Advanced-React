import React from 'react';
import {useDarkMode} from "../utils/useDarkMode"

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h5 className="ChangeTheme">Change site Theme</h5>
      <div className="dark-mode__toggle">
        
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
         
        />
      </div>
    </nav>
  );
};

export default Navbar;
