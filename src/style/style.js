//Styled Components
import styled, {css} from 'styled-components';

 export const Button = styled.button`
  background: transparent;
  border-radius: 20px;
  color: #083132;
  width: 130px;
  height: 40px;
  text-align: center;
  outline: none;
  cursor: pointer;
  margin: 0 10px;
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

export const Heading = styled.h1`

  font-weight: 900;
  font-family: Playfair Display;
  font-size: 72px;
  letter-spacing: 4px;
  width: 100%;
  padding: 0 0 0 20px;
  margin-bottom: 0;

  ${props => props.heading2 && css`
    font-size: 60px;
  `}
  ${props => props.center&& css`
    text-align: center;
  `}
`

export const Paragraph = styled.h1`
  font-weight: 700;
  font-family: Lato;
  font-size: 24px;
  line-height: auto;
  letter-spacing: 4px;
  margin-top: 0;
  padding: 0 0 0 30px;
  ${props => props.center&& css`
    text-align: center;
  `}
  ${props => props.space&& css`
    margin-bottom: 95px;
  `}
`
