import React, { Component } from 'react';
import earth from '../images/earth.svg';
import logo from '../images/milkyway.png';
import './style.css';

import {Animated} from "react-animated-css";
import { Parallax } from 'react-scroll-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';

const ParallaxImage = () => (
    <Parallax
        className="custom-class"
        offsetYMax={20}
        offsetYMin={-20}
        slowerScrollRate
        tag="figure"
    >
    <earth></earth>
    </Parallax>
);


class EarthHistory extends Component {
    render() {
    return (
        <div className="root">
            <div className="container">                                   
                <Parallax
                    offsetYMin={-50}
                    offsetYMax={50}
                    className="ring"
                >
                    <img src={logo} className="earthImage" alt="logo" />
                </Parallax>
            </div>            
            <p className="scroll">Scroll</p>
        </div>
    );
  }
}

export default EarthHistory;
