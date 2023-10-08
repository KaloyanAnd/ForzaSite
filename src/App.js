import React from 'react';
import './App.css';
import AboutGame from './components/AboutGame';
import Cars from './components/Cars';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import DarkModeToggle from './components/DarkToggle';

function App() {
  const [route, setRoute] = React.useState('about');

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
    <div>
      <Header onRouteChange={handleRouteChange} currentRoute={route} />
      {content}
      <DarkModeToggle/>
      <Footer />
    </div>
  );
}

export default App;
