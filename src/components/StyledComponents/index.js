import styled from 'styled-components';

const mainColor = 'cornflowerblue';
const accentColor = 'palevioletred';

export const Input = styled.input`
  size: 4em;
  border: 4px solid ${accentColor};
  border-radius: 5px;
  height: ${props => props.height};
  width: ${props => props.width};
  font-size: 40px;
  color: ${accentColor};
  padding: 5px;
  text-align: center;
`

export const Button = styled.button`
  background: ${props => props.inverse ? 'white' : accentColor};
  color: ${props => props.inverse ? accentColor : 'white'};
  font-size: 2em;
  margin: 1rem 1rem;
  padding: 1em 2em;
  border: 4px solid ${accentColor};
  border-radius: 3px;
  cursor: pointer;

`
export const H1 = styled.h1`
  color: ${mainColor};
  font-size: 2.5em;
`

export const Circle = styled.div`
  border: 10px solid ${mainColor};
  border-radius: 50%;
  margin: 2em auto;
  height: 500px;
  width: 500px;
`
export const ClockHand = styled.div`
  height: 0;
  width: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: ${props => props.hour ? '200px' : '250px'} solid ${props => props.hour ? mainColor : 'rgba(100,149,237,0.7)'};
  position: relative;
  left: 48%;
  bottom: ${props => props.bottom}%;
  transform:rotate(${props => props.deg}deg);
  transform-origin: ${props => props.x}% ${props => props.y}%;
`

export const Bell = styled.div`
  background-color: ${mainColor};
  height: 80px;
  width: 160px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  transform: rotate(${props => props.deg}deg);
  position: relative;
  top: ${props => props.top}em;
  left: ${props => props.left}em;
`
export const ClockFoot = styled.div`
  background-color: ${mainColor};
  border-radius: 50%;
  position: relative;
  bottom: ${props => props.bottom}em;
  left: ${props => props.left}em;
  height: 60px;
  width: 60px;
`
