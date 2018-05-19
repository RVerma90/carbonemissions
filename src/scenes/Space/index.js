import React, { Component } from 'react';
import earth from '../images/earth.svg';
import sun from '../images/sun.png';
import './style.css';

import {Animated} from "react-animated-css";
import { Parallax } from 'react-scroll-parallax';

class Space extends Component {
    render() {
        return (
            <div className="Space">
                
                <div>
                    <Parallax
                        offsetYMin={-250}
                        offsetYMax={0}
                    >
                        <p className="text">Earth, along with the solar system formed ~4.5billion years ago</p>
                    </Parallax>  
                    <Parallax
                        offsetYMin={100}
                        offsetYMax={50}
                        offsetXMin={-25}
                        offsetXMax={100}                        
                    >
                        <div className="sunZoomIn"></div>
                        <div className="earthZoomIn"></div>
                    </Parallax>                     
                    <Parallax
                        offsetYMin={-150}
                        offsetYMax={500}
                    >
                        <p className="text">Eventually life began on Earth and started harvesting all kinds of energy to survive</p>
                    </Parallax> 
                </div>                                           
                
            </div>
        );
  }
}

export default Space;
