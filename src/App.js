import React from 'react'
import hand from './assets/hand.svg';
import './App.css';
import {Button, Paragraph, Heading} from './style/style.js';

function App() {
  return (
    <div className="main">
      <section className="top">
        <ul className="nav">
          <Button orange>about</Button>
          <Button green>portfolio</Button>
          <Button blue>contact</Button>
        </ul>
      </section>
      <section className="greeting">
        <Heading center>Hello,</Heading>
          <Paragraph center space>   
            My name is Luna.<br/>I am a <span className="circle">De</span>signer and <span className="rectangle">Developer</span> 
          </Paragraph>
      
       
        <img src={hand} className="hand" alt="logo" />

      </section>
      <section id="itiswell">
        
      </section>
    </div>
  );
}



export default App;
