import React, { Component } from 'react';
import './style.css';

import { Parallax } from 'react-scroll-parallax';

class SunEarth extends Component {
    render() {
        return (
            <div className="SunEarth">
                <div>
                    <Parallax
                        offsetYMin="-250px"
                        offsetYMax="0px"
                    >
                        <p className="text">Earth, along with the solar system formed ~4.5billion years ago</p>
                    </Parallax>  
                    <Parallax
                        offsetYMin="0px"
                        offsetYMax="100px"
                        offsetXMin="-25px"
                        offsetXMax="100px"                        
                    >
                        <div className="sunZoomIn"></div>
                        <div className="earthZoomIn"></div>
                    </Parallax>                     
                    <Parallax
                        offsetYMin="-300px"
                        offsetYMax="-150px"
                    >
                        <p className="text">Eventually life began on Earth and started harvesting all kinds of energy to survive</p>
                    </Parallax> 
                </div>                                           
            </div>
        );
  }
}

export default SunEarth;
