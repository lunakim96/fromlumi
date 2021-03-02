import React from 'react'
import './App.css';
import Greeting from './sections/Greeting.js';
import Portfolio from './sections/Portfolio.js';
import NavBar from './sections/Nav.js';
import './style/nav.css';
//import images
// import itiswell from './imgs/itiswell/itiswell.jpg';


const Main=() => {
  
  return (

      <div className="main" id="top">
        <NavBar />
        <Greeting/>
        <Portfolio/>
      </div>
     
  );
}

export default Main;
