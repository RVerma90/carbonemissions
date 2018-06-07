import React, { Component } from 'react';
import Lightbulb from '../images/lightbulb.png';
import Lightbulbs from '../images/lightbulbs.png';

import './style.css';

import { Parallax } from 'react-scroll-parallax';

class Consumption extends Component {
    render() {
        return (
            <div className="Consumption">
                <div>
                <p className="textBlack">An average person eats and burns about 1700 kcals a day,</p>
                <img src={Lightbulb}/>
                <p className="textBlack">which is enough to power a typical lightbulb.</p>
                    <br/><br/><br/>
                <img src={Lightbulbs}/>
                <p className="textBlack">But our habits unfortunately rely on far more energy and resources, relasing more harmful gases.</p>                     
                </div>                                       
            </div>
        );
  }
}

export default Consumption;
