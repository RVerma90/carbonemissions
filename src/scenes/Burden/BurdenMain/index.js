import React, { Component } from 'react';
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
                    >
                        <h1 className="title">Bojh</h1>
                        <h2 className="subtitle">Burden</h2>
                    </Parallax>   
                </Animated>
                <Animated animationIn="fadeIn" isVisible={true}>
                    <Parallax
                        offsetYMin={-150}
                        offsetYMax={150}
                    >
                    </Parallax>  
                    <Parallax
                        offsetYMin={40}
                        offsetYMax={-20}
                    >
                    </Parallax>              
                </Animated>    
            </div>
        );
  }
}

export default GlobalWarming;
