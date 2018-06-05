import React, { Component } from 'react';
import Whale from '../images/whale.png';
import Dolphine from '../images/dolphine.png';
import BathySphere from '../../../components/BathySphere';

import './style.css';

import { Parallax } from 'react-scroll-parallax';

class Consumption extends Component {
    render() {
        return (
            <div className="Consumption">
                <div>
                    <Parallax
                        offsetYMin="50px"
                        offsetYMax="-50px"
                    >
                        <p className="textBlack">An average person eats and burns about 1700 kcals a day,</p>
                    </Parallax>   
                    <Parallax
                        offsetXMin="-150px"
                        offsetXMax="50px"
                        offsetYMin="150px"
                        offsetYMax="-50px"
                    >
                        <img src={Whale} className="species" alt="logo" />
                    </Parallax>                        
                    <Parallax
                        offsetXMin="200px"
                        offsetXMax="-350px"
                        offsetYMin="50px"
                        offsetYMax="150px"                        
                    >
                        <img src={Dolphine} className="species" alt="logo" />
                    </Parallax>                                            
                    <Parallax
                        offsetYMin="400px"
                        offsetYMax="200px"
                    >
                        <p className="textBlack">which is enough to power a typical lightbulb.</p>
                    </Parallax>  
                    <Parallax
                        offsetYMin="200px"
                        offsetYMax="500px"
                    >
                        <BathySphere></BathySphere>
                    </Parallax>  
                    <Parallax
                        offsetYMin="400px"
                        offsetYMax="200px"
                    >
                        <p className="textBlack">Our habits unfortunately rely on far more energy and resources.</p>
                    </Parallax>                       
                </div>                                       
            </div>
        );
  }
}

export default Consumption;
