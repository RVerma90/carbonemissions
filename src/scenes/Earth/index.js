import React, { Component } from 'react';
import earth from '../images/earth.svg';
import sun from '../images/sun.png';
import './style.css';

import {Animated} from "react-animated-css";
import { Parallax } from 'react-scroll-parallax';

class Earth extends Component {
    render() {
    return (
      <div className="Earth">
        <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
            <Parallax
                offsetYMin={-50}
                offsetYMax={50}
                className="ring"
            >
                <h1 className="title">Yatra</h1>
            </Parallax>            
            <Parallax
                offsetYMin={-5000}
                offsetYMax={5000}
                className="circle"
            >
            <img src={sun} className="sunShine" alt="logo" />    
            </Parallax>  
            <Parallax
                offsetYMin={-50}
                offsetYMax={50}
                className="circle"
            >
            <img src={earth} className="earthImage" alt="logo" />
            </Parallax>              
            
            
        </Animated>
      </div>
    );
  }
}

export default Earth;
