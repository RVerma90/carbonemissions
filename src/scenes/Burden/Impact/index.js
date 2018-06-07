import React, { Component } from 'react';
import Impact1 from '../images/tornado.png';
import Impact2 from '../images/heatwaves.png';
import Impact3 from '../images/drought.png';
import Impact4 from '../images/forestfire.png';
import Impact5 from '../images/migration.png';
import Impact6 from '../images/disease.png';
import Impact7 from '../images/extinction.png';



import './style.css';

import { Parallax } from 'react-scroll-parallax';

class Impact extends Component {
    render() {
        return (
            <div className="Impact">
                <div className="impactItem">
                    <img src={Impact1} className="species" alt="logo" />
                    <p className="textBlack2">Extreme Weather</p>
                </div>
                <div className="impactItem">
                    <img src={Impact2} className="species" alt="logo" />
                    <p className="textBlack2">Heatwaves</p>
                </div>
                <div className="impactItem">
                    <img src={Impact3} className="species" alt="logo" />
                    <p className="textBlack2">Drought</p>
                </div>
                <div className="impactItem">
                    <img src={Impact4} className="species" alt="logo" />
                    <p className="textBlack2">Wildfires</p>
                </div>
                <div className="impactItem">
                    <img src={Impact5} className="species" alt="logo" />
                    <p className="textBlack2">Mass migration</p>
                </div>
                <div className="impactItem">
                    <img src={Impact6} className="species" alt="logo" />
                    <p className="textBlack2">Disease</p>
                </div>                                
                <div className="impactItem">
                    <img src={Impact7} className="species" alt="logo" />
                    <p className="textBlack2">Species Extinction</p>
                </div>
            </div>
        );
  }
}

export default Impact;
