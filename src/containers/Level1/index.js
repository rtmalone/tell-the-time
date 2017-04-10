import React from 'react';

import {Circle, ClockHand, HalfCircle} from '../../components/StyledComponents';
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
      <div>
        <Circle>
          <HalfCircle deg={315} top={-0.6} left={-3.5}/>
          <HalfCircle deg={45} top={-5.7} left={24.7} />
          <ul className='digits'>
            {digits}
          </ul>
          <ClockHand length={200} deg={20} bottom={58} hour/>
          <ClockHand length={300} deg={0} bottom={108} />
        </Circle>
      </div>
    )
  }
}

export default Level1;
