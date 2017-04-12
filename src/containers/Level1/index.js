import React from 'react';

import {Circle, ClockHand, ClockFoot, Bell} from '../../components/StyledComponents';
import AnswerBtns from '../../components/AnswerBtns';
import './style.css';

class Level1 extends React.Component {
  state = {
    query: null,
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
    ],
    hours: [
      {time: '1:00', deg: '30'},
      {time: '2:00', deg: '60'},
      {time: '3:00', deg: '90'},
      {time: '4:00', deg: '120'},
      {time: '5:00', deg: '150'},
      {time: '6:00', deg: '180'},
      {time: '7:00', deg: '210'},
      {time: '8:00', deg: '240'},
      {time: '9:00', deg: '270'},
      {time: '10:00', deg: '300'},
      {time: '11:00', deg: '330'},
      {time: '12:00', deg: '0'}
    ]
  }

  componentWillMount() {
    this.chooseTime(this.state.hours);
  }

  chooseTime = (array) => {
    const num = Math.round(Math.random() * (array.length - 1));
    this.setState({query: array[num]});
  }

  render() {
    const digits = this.state.digits.map((obj, i) => {
      return <li key={i} style={{transform:'translate('+obj.x+', '+obj.y+')'}}>{obj.num}</li>
    })
    return (
      <div>
        <Circle>
          <Bell deg={315} top={-0.6} left={-3.5}/>
          <Bell deg={45} top={-5.7} left={24.7} />
          <ul className='digits'>
            {digits}
          </ul>
          <ClockHand deg={this.state.query.deg} bottom={70} x={50} y={80} hour/>
          <ClockHand deg={0} bottom={119.5} x={50} y={83} />
          <ClockFoot bottom={26} left={6} />
          <ClockFoot bottom={29.6} left={22} />
        </Circle>
      </div>
    )
  }
}

export default Level1;
