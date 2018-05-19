import React, { Component } from 'react';
import './App.css';
import Journey from './scenes/Journey';
import Wisdom from './scenes/Wisdom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Journey></Journey>
        <Wisdom></Wisdom>
      </div>
    );
  }
}

export default App;
