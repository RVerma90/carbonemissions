import React, { Component } from 'react';
import Lightbulb from '../images/lightbulb.png';
import Lightbulbs from '../images/lightbulbs.png';

import './style.css';

class Consumption extends Component {
    render() {
        return (
            <div className="Consumption">
                <div>
                    <p className="textBlack">An average person eats and burns about 1700 kcals a day,</p>
                    <img src={Lightbulb} alt="lightbulb"/>
                    <p className="textBlack">which is enough to power a typical lightbulb.</p>
                        <br/><br/><br/>
                    <img src={Lightbulbs} className="lightbulbs" alt="lightbulbs"/>
                    <p className="textBlack">But our habits unfortunately rely on far more energy and resources, releasing more harmful gases to our surroundings.</p>
                </div>                                       
            </div>
        );
  }
}

export default Consumption;
