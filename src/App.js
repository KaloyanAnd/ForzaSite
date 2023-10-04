import React, { useState } from 'react';
import './App.css';
import AboutGame from './components/AboutGame';
import Cars from './components/Cars';
import Features from './components/Features'
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [route, setRoute] = useState('about');

  const handleRouteChange = (newRoute) => {
    setRoute(newRoute);
  };

  let content;

  switch (route) {
    case 'about':
      content = <AboutGame />; 
      break;
    case 'cars':
      content = <Cars />;
      break;
    case 'features':
      content = <Features />;
      break;
    default:
      content = <AboutGame />;
  }

  return (
    <div className="App">
      <Header onRouteChange={handleRouteChange} currentRoute={route} />
      {content}
      <Footer />
    </div>
  );
}

export default App;
