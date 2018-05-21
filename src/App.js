import React, { Component } from 'react';
import './App.css';
import Journey from './scenes/Journey';
import Intelligence from './scenes/Intelligence';
import Burden from './scenes/Burden';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Journey></Journey>
        <Intelligence></Intelligence>
        <Burden></Burden>
      </div>
    );
  }
}

export default App;
