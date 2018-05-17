import React, { Component } from 'react';
import logo from '../images/earth.svg';
import './style.css';

import {Animated} from "react-animated-css";

class Earth extends Component {
    render() {
    return (
      <div className="Earth">
        <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
            <h1 className="title">Earth</h1>
        </Animated>
        <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
            <img src={logo} className="earthImage" alt="logo" />
        </Animated>
      </div>
    );
  }
}

export default Earth;
