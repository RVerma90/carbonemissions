
import React, { Component } from 'react';
import './style.css';
import { Parallax } from 'react-scroll-parallax';

import Rocket from '../../../components/Rocket';
import Moon from '../../../components/Moon';
import City from '../images/london.png';

class Generations extends Component {
    render() {
        return (
            <div class="SunInSky">                                           
                <Parallax
                    offsetYMin="-1000px"
                    offsetYMax="0px" 
                >
                <Rocket></Rocket>
                </Parallax>                                 
                <Parallax
                    offsetXMin="50px"
                    offsetXMax="-100px"
                    offsetYMin="100px"
                    offsetYMax="400px"                    
                >
                <Moon></Moon>
                </Parallax>                                              
                <img src={City} className="city" alt="logo" />
            </div>
        );
  }
}

export default Generations;
