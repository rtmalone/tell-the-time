import React from 'react';

import NameInput from '../../components/NameInput';
import LevelBtns from '../../components/LevelBtns';

class Home extends React.Component {
  state = {
    player: null
  }

  setPlayer = (name) => {
    this.setState({
      player: name
    });
  }

  render() {
    return (
      <div>
        <NameInput setPlayer={this.setPlayer} />
        <LevelBtns player={this.state.player} />
      </div>
    )
  }
}

export default Home;
