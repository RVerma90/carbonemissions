import React, { Component } from 'react';
import Whale from '../images/whale.png';
import Dolphine from '../images/dolphine.png';
import BathySphere from '../../../components/BathySphere';

import './style.css';

import { Parallax } from 'react-scroll-parallax';

class Pollution extends Component {
    render() {
        return (
            <div className="Pollution">
                <div>
                    <Parallax
                        offsetYMin="0px"
                        offsetYMax="0px"
                    >
                        <p className="textBlack">Understanding where greenhouse gases come from is important.</p>
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
                        <p className="textBlack">They come from activitities around agriculture, transportation,recycling and utilities.</p>
                    </Parallax>  
                </div>                                       
            </div>
        );
  }
}

export default Pollution;
