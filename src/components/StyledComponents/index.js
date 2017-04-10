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
