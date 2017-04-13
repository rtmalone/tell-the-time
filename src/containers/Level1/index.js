import React from 'react';

import Clock from '../../components/Clock';
import AnswerBtns from '../../components/AnswerBtns';
import './style.css';

const hours = [
  {time: '1:00', deg: 30},
  {time: '2:00', deg: 60},
  {time: '3:00', deg: 90},
  {time: '4:00', deg: 120},
  {time: '5:00', deg: 150},
  {time: '6:00', deg: 180},
  {time: '7:00', deg: 210},
  {time: '8:00', deg: 240},
  {time: '9:00', deg: 270},
  {time: '10:00', deg: 300},
  {time: '11:00', deg: 330},
  {time: '12:00', deg: 0}
];

class Level1 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
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
      hours: null,
      choices: null
    }
  }

  componentWillMount() {
    const _array = this.shuffle(hours);
    const _choices = _array.slice(0,3)
    const index = Math.round(Math.random() * 2);
    const _query = _choices[index];
    this.setState({
      hours: _array,
      query: _query,
      choices: _choices
    })
  }

  chooseTime = (array) => {
    const num = Math.round(Math.random() * (array.length - 1));
    this.setState({query: array[num]});
  }

  shuffle = (array) => {
    let _length = array.length, temp, i;

    while (_length) {
      i = Math.floor(Math.random() * _length--);

      temp = array[_length];
      array[_length] = array[i];
      array[i] = temp;
    }

    return array;
  }

  render() {
    return (
      <div className='row'>
        <div className='col-7'>
          <Clock {...this.state} />
        </div>
        <div className='col-5'>
          <AnswerBtns choices={this.state.choices} />
        </div>
      </div>
    )
  }
}

export default Level1;
