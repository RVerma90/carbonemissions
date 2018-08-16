import React, { Component } from 'react';
import './style.css';

import {Animated} from "react-animated-css";
import { Parallax } from 'react-scroll-parallax';

// import Logo from '../images/logoimage.png';
import Logo from '../images/plant.png';

class SolutionMain extends Component {
    render() {
        return (
            <div className="JourneyMain">
                <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
                    <Parallax
                        offsetYMin="400px"
                        offsetYMax="0px"
                    >
                        <h1 className="title">Upaay</h1>
                        <h2 className="subtitle">Solution</h2>
                    </Parallax> 
                    <Parallax
                        offsetYMin="200px"
                        offsetYMax="200px"
                    >
                        <img src={Logo} className="logoImage" alt="logo" />
                    </Parallax>  
                </Animated>    
            </div>
        );
    }
}

export default SolutionMain;