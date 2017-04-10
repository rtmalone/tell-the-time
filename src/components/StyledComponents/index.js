import styled from 'styled-components';

export const Input = styled.input`
  size: 4em;
  border: 4px solid palevioletred;
  border-radius: 5px;
  height: ${props => props.height};
  width: ${props => props.width};
  font-size: 40px;
  color: palevioletred;
  padding: 5px;
  text-align: center;
`

export const Button = styled.button`
  background: ${props => props.selected ? 'white' : 'palevioletred'};
  color: ${props => props.selected ? 'palevioletred' : 'white'};
  font-size: 2em;
  margin: 0em 1em;
  padding: 1em 2em;
  border: 4px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;

`
export const H1 = styled.h1`
  color: cornflowerblue;
  font-size: 2.5em;
`

export const Circle = styled.div`
  border: 10px solid cornflowerblue;
  border-radius: 50%;
  margin: auto;
  height: 500px;
  width: 500px;
`
export const ClockHand = styled.div`
  height: 0;
  width: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: ${props => props.length}px solid ${props => props.hour ? 'cornflowerblue' : 'rgba(100,149,237,0.7)'};
  ${''/* background-color: ${props => props.hour ? 'cornflowerblue' : 'palevioletred'} */}
  position: relative;
  left: 48%;
  bottom: ${props => props.bottom}%;
  transform:rotate(${props => props.deg}deg);
`

export const HalfCircle = styled.div `
  background-color: cornflowerblue;
  height: 80px;
  width: 160px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  transform: rotate(${props => props.deg}deg);
  position: relative;
  top: ${props => props.top}em;
  left: ${props => props.left}em;
`
