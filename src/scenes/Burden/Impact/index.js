import React, { Component } from 'react';
import Whale from '../images/whale.png';
import Dolphine from '../images/dolphine.png';
import Impact1 from '../images/impact1.png';
import Impact2 from '../images/impact2.png';
import Impact3 from '../images/impact3.png';
import Impact4 from '../images/impact4.png';
import Impact5 from '../images/impact5.png';
import Impact6 from '../images/impact6.png';
import Impact7 from '../images/impact7.png';
import Impact8 from '../images/impact8.png';



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
                    <p className="textBlack2">Diease</p>
                </div>
                <div className="impactItem">
                    <img src={Impact7} className="species" alt="logo" />
                    <p className="textBlack2">Conflict</p>
                </div>                                   
                <div className="impactItem">
                    <img src={Impact8} className="species" alt="logo" />
                    <p className="textBlack2">Species Extinction</p>
                </div>
            </div>
        );
  }
}

export default Impact;
