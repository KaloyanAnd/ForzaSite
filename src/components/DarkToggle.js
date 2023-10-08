import React from 'react';
import './DarkToggle.css';

function DarkModeToggle() {
  const setDarkMode = () =>{
    document.querySelector("body").setAttribute('theme','dark')
  }

  const setLightMode = () =>{
    document.querySelector("body").setAttribute('theme','light')
  }

   const toggleTheme = (e) =>{
    if (e.target.checked) setDarkMode();
    else setLightMode()
   };
  

  return (
    <div>
        <input type="checkbox" id="darkmode-toggle" onChange={toggleTheme}/>
        <label htmlFor="darkmode-toggle">
        <svg className='sun' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 50 50">
        <path d="M 24.984375 3.9863281 A 1.0001 1.0001 0 0 0 24 5 L 24 11 A 1.0001 1.0001 0 1 0 26 11 L 26 5 A 1.0001 1.0001 0 0 0 24.984375 3.9863281
         z M 10.847656 9.8476562 A 1.0001 1.0001 0 0 0 10.150391 11.564453 L 14.394531 15.808594 A 1.0001 1.0001 0 1 0 15.808594 14.394531 L 11.564453
         10.150391 A 1.0001 1.0001 0 0 0 10.847656 9.8476562 z M 39.123047 9.8476562 A 1.0001 1.0001 0 0 0 38.435547 10.150391 L 34.191406 14.394531 A
         1.0001 1.0001 0 1 0 35.605469 15.808594 L 39.849609 11.564453 A 1.0001 1.0001 0 0 0 39.123047 9.8476562 z M 25 15 A 1.0001 1.0001 0 0 0 24.589844
         15.083984 C 19.284905 15.312748 15 19.640816 15 25 C 15 30.505414 19.495611 35 25 35 C 30.50528 35 35 30.50528 35 25 C 35 19.642276 30.717945
         15.314763 25.414062 15.083984 A 1.0001 1.0001 0 0 0 25 15 z M 25 17 C 29.420586 17 33 20.580389 33 25 C 33 29.42072 29.42072 33 25 33 C 20.580389 33 17
         29.420586 17 25 C 17 20.580523 20.580523 17 25 17 z M 5 24 A 1.0001 1.0001 0 1 0 5 26 L 11 26 A 1.0001 1.0001 0 1 0 11 24 L 5 24 z M 39 24 A 1.0001 1.0001
         0 1 0 39 26 L 45 26 A 1.0001 1.0001 0 1 0 45 24 L 39 24 z M 15.082031 33.890625 A 1.0001 1.0001 0 0 0 14.394531 34.193359 L 10.150391 38.435547 A 1.0001 1.0001   
         0 1 0 11.564453 39.849609 L 15.808594 35.607422 A 1.0001 1.0001 0 0 0 15.082031 33.890625 z M 34.888672 33.890625 A 1.0001 1.0001 0 0 0 34.191406 35.607422
         L 38.435547 39.849609 A 1.0001 1.0001 0 1 0 39.849609 38.435547 L 35.605469 34.193359 A 1.0001 1.0001 0 0 0 34.888672 33.890625 z M 24.984375 37.986328 A 1.0001
         1.0001 0 0 0 24 39 L 24 45 A 1.0001 1.0001 0 1 0 26 45 L 26 39 A 1.0001 1.0001 0 0 0 24.984375 37.986328 z"></path>
        </svg>
        <svg className='moon' width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
        <path d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203
        15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z" stroke="#000000"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        </path> </g></svg>
        </label>
    </div>
  );
}

export default DarkModeToggle;