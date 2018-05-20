
import React, { Component } from 'react';
import './style.css';
import { Parallax } from 'react-scroll-parallax';

import Rocket from '../../../components/Rocket';
import Ray from '../../../components/Ray';
import Moon from '../../../components/Moon';

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
            </div>
        );
  }
}

export default Generations;
