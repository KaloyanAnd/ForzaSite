import React from 'react';
import './Header.css'; 

function Header({ onRouteChange, currentRoute }) {
  const handleButtonClick = (newRoute) => {
    onRouteChange(newRoute);
  };

  return (
    <header>
        
      <div className="navbar">
      <img src={require('../img/favicon.ico')} alt='logo'/>
      <h1>Forza Horizon 5</h1>
        <ul>
          <li>
            <button onClick={() => handleButtonClick('about')} className={currentRoute === 'about' ? 'active' : ''}>
              About
            </button>
          </li>
          <li>
            <button onClick={() => handleButtonClick('cars')} className={currentRoute === 'cars' ? 'active' : ''}>
              Cars
            </button>
          </li>
          <li>
            <button onClick={() => handleButtonClick('features')} className={currentRoute === 'features' ? 'active' : ''}>
              Features
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
