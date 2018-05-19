import React, { Component } from 'react';
import earth from '../images/earth.svg';
import sun from '../images/sun.png';

import './style.css';

import {Animated} from "react-animated-css";
import { Parallax } from 'react-scroll-parallax';

class Hero extends Component {
    render() {
        return (
            <div className="Hero">
                <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
                    <Parallax
                        offsetYMin={500}
                        offsetYMax={-150}
                        className="ring"
                    >
                        <h1 className="title">Yatra</h1>
                        <h2 className="subtitle">Journey</h2>
                        <h2 className="text">Our story began here</h2>
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

export default Hero;
