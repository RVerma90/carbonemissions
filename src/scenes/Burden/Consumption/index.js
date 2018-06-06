import React, { Component } from 'react';
import Whale from '../images/whale.png';
import Lightbulb from '../images/lightbulb.png';
import Lightbulbs from '../images/lightbulbs.png';

import './style.css';

import { Parallax } from 'react-scroll-parallax';

class Consumption extends Component {
    render() {
        return (
            <div className="Consumption">
                <div>
                    <Parallax
                        offsetYMin="50px"
                        offsetYMax="-100px"
                    >
                        <p className="textBlack">An average person eats and burns about 1700 kcals a day,</p>
                    </Parallax>   
                    <Parallax
                        offsetYMin="150px"
                        offsetYMax="-50px"
                    >
                        <img src={Lightbulb}/>
                    </Parallax>                                                                 
                    <Parallax
                        offsetYMin="200px"
                        offsetYMax="0px"
                    >
                        <p className="textBlack">which is enough to power a typical lightbulb.</p>
                    </Parallax>  
                    <Parallax
                        offsetYMin="120px"
                        offsetYMax="450px"
                    >
                        <img src={Lightbulbs}/>
                    </Parallax>                      
                    <Parallax
                        offsetYMin="400px"
                        offsetYMax="200px"
                    >
                        <p className="textBlack">But our habits unfortunately rely on far more energy and resources.</p>
                    </Parallax>                       
                </div>                                       
            </div>
        );
  }
}

export default Consumption;
