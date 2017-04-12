import React from 'react';

import {Circle, ClockHand, ClockFoot, Bell} from '../StyledComponents';
import injectStyle from '../../utils/injectStyle';
import './style.css';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    const keyFrames = `
      @keyframes spin {
          from {
              transform:rotate(0deg);
          }
          to {
              transform:rotate(${this.props.query.deg}deg);
          }
      }
    `;
    injectStyle(keyFrames);
  }

  render() {
    const digits = this.props.digits.map((obj, i) => {
      return <li key={i} style={{transform:'translate('+obj.x+', '+obj.y+')'}}>{obj.num}</li>
    })
    const style = {

    }

    return (
      <Circle>
        <Bell deg={315} top={-0.6} left={-3.5}/>
        <Bell deg={45} top={-5.7} left={24.7} />
        <ul className='digits'>
          {digits}
        </ul>
        <ClockHand className='animate' style={style} deg={this.props.query.deg} bottom={70} x={50} y={80} hour/>
        <ClockHand deg={0} bottom={119.5} x={50} y={83} />
        <ClockFoot bottom={25.8} left={5.8} />
        <ClockFoot bottom={29.6} left={22} />
      </Circle>
    )
  }
}

export default Clock;
