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
                        offsetYMin="-400px"
                        offsetYMax="100px"
                    >
                        <h1 className="title">Yatra</h1>
                        <h2 className="subtitle">Journey</h2>
                    </Parallax> 
                    <Parallax
                        offsetYMin="400px"
                        offsetYMax="0px"
                    >
                        <img src={earth} className="earthImage" alt="logo" />
                    </Parallax>                                                    
                </Animated>    
            </div>
        );
  }
}

export default Hero;
