import React from 'react';

import {Circle} from '../../components/StyledComponents';
import './style.css';

class Level1 extends React.Component {
  state = {
    digits: [
      {num: '1', translate:{ x:'4em' , y:'-7em'}},
      {num: '2', translate:{ x:'7em' , y:'-4em'}},
      {num: '3', translate:{ x:'8em' , y:'0em'}},
      {num: '4', translate:{ x:'7em' , y:'4em'}},
      {num: '5', translate:{ x:'4em' , y:'7em'}},
      {num: '6', translate:{ x:'0em' , y:'8em'}},
      {num: '7', translate:{ x:'-4em' , y:'7em'}},
      {num: '8', translate:{ x:'-7em' , y:'4em'}},
      {num: '9', translate:{ x:'-8em' , y:'0em'}},
      {num: '10', translate:{ x:'-7em' , y:'-4em'}},
      {num: '11', translate:{ x:'-4em' , y:'-7em'}},
      {num: '12', translate:{ x:'0em' , y:'-8em'}},
    ]
  }
  render() {
    const digits = this.state.digits.map((obj, i) => {
      return <li key={i} style={{transform:'translate('+obj.x+', '+obj.y+')'}}>{obj.num}</li>
    })
    return (
      <Circle>
        <ul className='digits'>
          {digits}
        </ul>
      </Circle>
    )
  }
}

export default Level1;
