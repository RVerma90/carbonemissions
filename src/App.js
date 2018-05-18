import React, { Component } from 'react';
import './App.css';
import Earth from './scenes/Earth';

import { Parallax } from 'react-scroll-parallax';

const ParallaxImage = () => (
    <Parallax
        className="custom-class"
        offsetYMax={20}
        offsetYMin={-20}
        slowerScrollRate
        tag="figure"
    >
    <Earth></Earth>
    <Earth></Earth>
    </Parallax>
);

class App extends Component {
  render() {
    return (
      <div className="App">
          <ParallaxImage>
          </ParallaxImage>
      </div>
    );
  }
}

export default App;
