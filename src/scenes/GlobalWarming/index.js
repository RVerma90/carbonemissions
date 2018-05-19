import React, { Component } from 'react';
import earth from '../images/earth.svg';
import sun from '../images/sun.png';
import './style.css';

import {Animated} from "react-animated-css";
import { Parallax } from 'react-scroll-parallax';

class GlobalWarming extends Component {
    render() {
        return (
            <div className="GlobalWarming">
                <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
                    <Parallax
                        offsetYMin={100}
                        offsetYMax={-150}
                        className="ring"
                    >
                        <h1 className="title">Vinaash</h1>
                        <h2 className="subtitle">Destruction</h2>
                    </Parallax>   
                </Animated>
                <Animated animationIn="fadeIn" isVisible={true}>
                    <Parallax
                        offsetYMin={-150}
                        offsetYMax={150}
                        className="circle"
                    >
                    <img src={sun} className="sunShine" alt="logo" />    
                    </Parallax>  
                    <Parallax
                        offsetYMin={40}
                        offsetYMax={-20}
                        className="circle"
                    >
                    <img src={earth} className="earthImage" alt="logo" />
                    </Parallax>              
                </Animated>    
            </div>
        );
  }
}

export default GlobalWarming;
