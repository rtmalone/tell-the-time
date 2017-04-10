import React from 'react';
import {Link} from 'react-router-dom';

import {Button, H1} from '../StyledComponents';
import './style.css';

const LevelBtns = () => {
  return (
    <div className='levelBtns'>
      <div>
        <H1>Choose a level:</H1>
      </div>
      <Link to='/level1'><Button>1</Button></Link>
      <Button>2</Button>
      <Button>3</Button>
    </div>
  )
}

export default LevelBtns;
