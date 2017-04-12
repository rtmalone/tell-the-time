import React from 'react';

import {Button, H1} from '../StyledComponents';
import './style.css';

const AnswerBtns = () => {
  return (
    <div className='answers'>
      <H1>What time is it?</H1>
      <Button inverse>1:00</Button>
      <Button inverse>2:00</Button>
      <Button inverse>3:00</Button>
    </div>
  )
}

export default AnswerBtns;
