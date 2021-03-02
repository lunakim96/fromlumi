//Styled Components
import styled, {css, keyframes} from 'styled-components';
import {fadeInUp, fadeInDown} from 'react-animations';

 export const Link = styled.a`
  background: transparent;
  color: #083132;
  text-align: center;
  outline: none;
  cursor: pointer;
  padding: 0 10px 0px 10px;
  transition: background 0.25s;
  font-size: 16px;
  font-weight: 600;
  font-family: Lato;
  line-height: 14.4px;
  letter-spacing: 5px; 
    
  ${props => props.orange && css`

    &:hover {
        color: #F0AE8E;
    }
  `}
  ${props => props.green && css`

    &:hover {
        color: #C7D9A7;
   
    } 
  `}
  ${props => props.blue && css`
    &:hover {
      color: #80c7cf;   
    }
  `}
`;

const fade = keyframes`${fadeInDown}`;
const fadeUp = keyframes`${fadeInUp}`;

export const Heading = styled.h1`

  font-weight: 900;
  font-family: Playfair Display;
  font-size: 15vh;
  letter-spacing: 4px;
  margin-top: 20vh;
  margin-bottom: 0;
  
 
  ${props => props.heading2 && css`
    font-size: 60px;
  `}
  ${props => props.center&& css`
    text-align: center;
  `}
  ${props => props.animated && css`
    animation: 2s ${fade};
  `}
  ${props => props.hover && css`
  transition: color 0.2s;

    &:hover {
      color: #c7d9a7;
    }
  `}
`

export const Paragraph = styled.p`
  font-weight: 700;
  font-family: Lato;
  font-size: 24px;
  line-height: auto;
  letter-spacing: 4px;
  margin-top: 0;
  text-align: left;

  ${props => props.p2 && css`
    font-size: 14px;
  `}

  ${props => props.center&& css`
    text-align: center;
  `}
  ${props => props.space&& css`
    margin-bottom: 95px;
  `}
  ${props => props.animated && css`
    animation: 2s ${fadeUp};
  `}
`
