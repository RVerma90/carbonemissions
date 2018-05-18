import React, { Component } from 'react';
import earth from '../images/earth.svg';
import sun from '../images/milkyway.png';
import './style.css';

import {Animated} from "react-animated-css";
import { Parallax } from 'react-scroll-parallax';

class Journey extends Component {
    render() {
        return (
            <div className="Journey">
                    <Parallax
                        offsetYMin={-800}
                        offsetYMax={-100}
                    >
                        <p className="text">Our story began here ~200000 years ago</p>
                    </Parallax>   
                    <Parallax
                        offsetYMin={0}
                        offsetYMax={0}
                        className="circle"
                    >
                    <img src={earth} className="journeyImage" alt="logo" />
                    </Parallax>                        
                    <Parallax
                        offsetYMin={1000}
                        offsetYMax={100}
                    >
                        <p className="text">but our Planet Earth has been around for much longer.</p>
                    </Parallax>                       
            </div>
        );
  }
}

export default Journey;
