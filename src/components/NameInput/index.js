import React from 'react';

import {Input, H1} from '../StyledComponents';

class NameInput extends React.Component {
  handleChange = (event) => {
    this.props.setPlayer(event.target.value);
  }
  
  render() {
    return (
      <div>
        <H1>What's your name?</H1>
        <Input type='text' height='50px' width='570px' onChange={this.handleChange}/>
      </div>
    )
  }
}

export default NameInput;
