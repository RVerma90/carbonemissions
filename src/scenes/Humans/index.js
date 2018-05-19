import React, { Component } from 'react';
import earth from '../images/earth.svg';
import sun from '../images/sun.png';
import './style.css';

import {Animated} from "react-animated-css";
import { Parallax } from 'react-scroll-parallax';

import Dude from '../../components/Human';
import Ray from '../../components/Ray';

class Human extends Component {
    render() {
        return (
            <div className="Earth">
                <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
                    <Parallax
                        offsetYMin={100}
                        offsetYMax={-150}
                        className="ring"
                    >
                        <h1 className="title">Buddhi</h1>
                        <h2 className="subtitle">Wisdom</h2>
                    </Parallax>   
                </Animated>
                <Animated animationIn="fadeIn" isVisible={true}>
                    <Parallax
                        offsetYMin={-150}
                        offsetYMax={150}
                        className="circle"
                    >
                    <Ray></Ray>
                    </Parallax>  
                    <Parallax
                        offsetYMin={40}
                        offsetYMax={-20}
                        className="circle"
                    >
                    </Parallax>              
                </Animated>    
            </div>
        );
  }
}

export default Human;
