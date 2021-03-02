import React from 'react'
import hand from '../assets/hand.svg';
import {Paragraph, Heading} from '../style/style.js';
import TextLoop from "react-text-loop";

const Greeting=() => {
  return (

        <div className="greeting" >
          <Heading animated center hover>Hello,</Heading>
            <Paragraph animated space>   
                My name is <span className="highlight">Luna</span><br/>I am a{"   "}
                <TextLoop  springConfig={{ stiffness: 90, damping: 10 }}
                adjustingSpeed={100}>
                    <span>Designer</span> 
                    <span>Developer</span> 
                    <span>Teacher</span> 
                    <span>Cat Lover</span> 
                </TextLoop>
            </Paragraph>
          <img src={hand} className="hand" alt="logo" />
        </div>
     
  );
}

export default Greeting;
