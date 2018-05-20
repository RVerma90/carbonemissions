
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
                    offsetXMin={0}
                    offsetXMax={0}
                    offsetYMin={0}
                    offsetYMax={0}                    
                >
                    <Moon></Moon>
                </Parallax>                                 
            </div>
        );
  }
}

export default Generations;
