import React, { Component } from 'react';
import './App.css';
import Earth from './scenes/Earth';
import Journey from './scenes/Journey';
import EarthHistory from './scenes/EarthHistory';
import Space from './scenes/Space';

import { Parallax } from 'react-scroll-parallax';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Earth></Earth>
        <Journey></Journey>
        <EarthHistory></EarthHistory>
        <Space></Space>
      </div>
    );
  }
}

export default App;
