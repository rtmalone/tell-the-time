import React from 'react';

import NameInput from '../../components/NameInput';
import LevelBtns from '../../components/LevelBtns';

class Home extends React.Component {
  render() {
    return (
      <div>
        <NameInput />
        <LevelBtns />
      </div>
    )
  }
}

export default Home;
