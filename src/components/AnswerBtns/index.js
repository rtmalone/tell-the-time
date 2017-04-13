import React from 'react';

import {Button, H1} from '../StyledComponents';
import './style.css';

const AnswerBtns = (props) => {
  const { choices } = props;
  return (
    <div className='answers'>
      <H1>What time is it?</H1>
      <Button onClick={props.checkAnswer} value={choices[0].time} inverse>{choices[0].time}</Button>
      <Button onClick={props.checkAnswer} value={choices[1].time} inverse>{choices[1].time}</Button>
      <Button onClick={props.checkAnswer} value={choices[2].time} inverse>{choices[2].time}</Button>
    </div>
  )
}

export default AnswerBtns;
