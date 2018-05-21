import React, { Component } from 'react';
import './style.css';

import { Parallax } from 'react-scroll-parallax';
import WolfHowl from '../images/wolfmountain.png';

class Wolf extends Component {
    render() {
        return (
            <div className="Wolf">
                <div>
                    <Parallax
                        offsetYMin="-300"
                        offsetYMax="-100"
                        offsetXMin="0"
                        offsetXMax="0"                        
                    >
                        <p className="text2">Eventually a chemical process was able to replicate itself and life began.</p>
                    </Parallax>     
                    <Parallax
                        offsetYMin="-50"
                        offsetYMax="300"
                        offsetXMin="0"
                        offsetXMax="0"                        
                    >
                        <div className="theMoon"></div>
                    </Parallax>                         
                    <img src={WolfHowl} className="theWolf" alt="logo" />
                </div>                                           
            </div>
        );
  }
}

export default Wolf;
