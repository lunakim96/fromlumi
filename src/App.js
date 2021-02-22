import logo from './logo.svg';
import hand from './assets/hand.svg';
import './App.css';
import styled, {css} from 'styled-components';

function App() {
  return (
    <div className="App">
      <section className="top">
        <ul className="nav">
          <Button orange>about</Button>
          <Button green>portfolio</Button>
          <Button blue>contact</Button>
        </ul>
      </section>
      <section>
        <Heading>Hello,</Heading>
        <p>My name is Luna.<br/>I am a UI/UX Designer and Software Engineer</p>
        <img src={hand} className="hand" alt="logo" />

      </section>
      
    </div>
  );
}

//Styled Components

const Button = styled.button`
  background: transparent;
  border-radius: 20px;
  color: #083132;
  margin: 0 20px;
  padding: 1em 50px;
  outline: none;
  cursor: pointer;
  transition: background 0.25s;
  font-size: 12px;
  font-weight: 700;
  font-family: Lato;
  line-height: 14.4px;
  letter-spacing: 10%; 

  ${props => props.orange && css`
    border: 3px solid #F0AE8E;

    &:hover {
      background:#F0AE8E;
    }
  `}
  ${props => props.green && css`
  border: 3px solid #C7D9A7;

    &:hover {
      background:#C7D9A7;
   
    } 
  `}
  ${props => props.blue && css`
  border: 3px solid #D0EFE9;
   
    &:hover {
      background: #D0EFE9;
     
    }
  `}
`;

const Heading = styled.h1`
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    font-weight: 900;
    font-family: Playfair Display;
    font-size: 72px;
    line-height: 95px;
    letter-spacing: 10%;

    ${props => props.heading2 && css`
      font-size: 60px;
    `}
`

const Paragraph = styled.h1`

`

export default App;
