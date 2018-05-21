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
                        <p className="text2">The Solar System formed ~4.5billion years ago.</p>
                        <p className="text2">Quietly, Earth's volcanoes erupted releasing steam that condensed into the oceans.</p>
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
                </div>                                           
            </div>
        );
  }
}

export default SunEarth;
