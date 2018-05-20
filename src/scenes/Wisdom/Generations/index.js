
import React, { Component } from 'react';
import './style.css';
import { Parallax } from 'react-scroll-parallax';

import Ray from '../../../components/Ray';
import Moon from '../../../components/Moon';

class Generations extends Component {
    render() {
        return (
            <div class="SunInSky">
                <Parallax
                    offsetYMin={-400}
                    offsetYMax={-75}                    
                >
                    <Ray></Ray>
                </Parallax>                                            
                <Parallax
                    offsetYMin={400}
                    offsetYMax={-650}
                >
                    <Moon></Moon>
                </Parallax>                 
            </div>
        );
  }
}

export default Generations;
