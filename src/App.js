import React, { Component } from 'react';
import './App.css';
import Journey from './scenes/Journey';
import Wisdom from './scenes/Wisdom';
import Burden from './scenes/Burden';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Journey></Journey>
        <Wisdom></Wisdom>
        <Burden></Burden>
      </div>
    );
  }
}

export default App;
