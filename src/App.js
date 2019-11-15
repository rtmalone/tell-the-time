import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import './static/simple-grid.min.css'

import Home from './containers/Home'
import Level1 from './containers/Level1'
import Level2 from './containers/Level2'
import Level3 from './containers/Level3'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/level1" component={Level1} />
            <Route path="/level2" component={Level2} />
            <Route path="/level3" component={Level3} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
