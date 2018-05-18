import React, { Component } from 'react';
import './App.css';
import Earth from './scenes/Earth';
import EarthHistory from './scenes/EarthHistory';

import { Parallax } from 'react-scroll-parallax';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Earth></Earth>
        <EarthHistory></EarthHistory>
      </div>
    );
  }
}

export default App;
