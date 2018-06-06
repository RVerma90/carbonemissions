import React, { Component } from 'react';
import Whale from '../images/whale.png';
import Dolphine from '../images/dolphine.png';
import BathySphere from '../../../components/BathySphere';

import './style.css';

import { Parallax } from 'react-scroll-parallax';

class Overcoming extends Component {
    render() {
        return (
            <div className="Overcoming">
                <div>
                    <Parallax
                        offsetYMin="0px"
                        offsetYMax="0px"
                    >
                        <p className="textBlack">Reducing our personal carbon footprint shouldn't have to be impossible.</p>
                    </Parallax>   
                    <Parallax
                        offsetXMin="0px"
                        offsetXMax="0px"
                        offsetYMin="0px"
                        offsetYMax="0px"
                    >
                    <img src={Whale} className="species" alt="logo" />
                    </Parallax>                        
                    <Parallax
                        offsetXMin="0px"
                        offsetXMax="0px"
                        offsetYMin="0px"
                        offsetYMax="0px"                        
                    >
                    <img src={Dolphine} className="species" alt="logo" />
                    </Parallax>                                            
                    <Parallax
                        offsetYMin="0px"
                        offsetYMax="0px"
                    >
                        <p className="textBlack">The most important thing is to occasionally adjust our habits, gradually becoming better in the process.</p>
                    </Parallax>  
                </div>                                       
            </div>
        );
  }
}

export default Overcoming;
