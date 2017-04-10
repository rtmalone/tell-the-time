import React from 'react';

import {Input, H1} from '../StyledComponents';

const NameInput = () => {
  return (
    <div>
      <H1>What's your name?</H1>
      <Input type='text' height='50px' width='570px' />
    </div>
  )
}

export default NameInput;
