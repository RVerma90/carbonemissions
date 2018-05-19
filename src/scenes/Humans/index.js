import React, { Component } from 'react';
import earth from '../images/earth.svg';
import sun from '../images/sun.png';
import './style.css';

import {Animated} from "react-animated-css";
import { Parallax } from 'react-scroll-parallax';

import Dude from '../../components/Human';
import Ray from '../../components/Ray';
import Circle from '../../components/Circle';


class Human extends Component {
    render() {
        return (
            <div className="Humans">
                <Parallax
                    offsetYMin={100}
                    offsetYMax={-150}
                >
                    <h1 className="title">Buddhi</h1>
                    <h2 className="subtitle">Wisdom</h2>
                </Parallax>  
                <Parallax
                    offsetYMin={100}
                    offsetYMax={0}
                >
                <Circle></Circle>
                </Parallax>                  
                <Parallax
                    offsetYMin={200}
                    offsetYMax={-200}
                >
                <Ray></Ray>
                </Parallax>                                                                          
                <Parallax
                    offsetYMin={-100}
                    offsetYMax={-50}
                >
                <Dude></Dude>
                </Parallax>                       
            </div>
        );
  }
}

export default Human;
