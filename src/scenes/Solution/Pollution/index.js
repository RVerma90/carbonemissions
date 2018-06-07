import React, { Component } from 'react';
import Whale from '../images/whale.png';
import Dolphine from '../images/dolphine.png';
import BathySphere from '../../../components/BathySphere';

import CO2Gas  from '../images/Pollution_co2.png';
import Car from '../images/Pollution_carparked.png';
import Cow from '../images/Pollution_cow.png';
import Coal from '../images/Pollution_coal.png';
import GasPump from '../images/Pollution_gaspump.png';
import GasTank from '../images/Pollution_gastank.png';
import Meat from '../images/Pollution_meat.png';
import Oil from '../images/Pollution_oil.png';
import Truck from '../images/Pollution_truck.png';
import Waste from '../images/Pollution_waste.png';

import Train from '../images/Transport_train.png';

import './style.css';

import { Parallax } from 'react-scroll-parallax';

class Pollution extends Component {
    render() {
        return (
            <div className="Pollution">
                <div>
                    <Parallax className="pollutionParallax"
                        offsetYMin={0}
                        offsetYMax={400}
                    >
                        <p className="textBlack">How we handle agriculture, transportation, recycling and utilities is important.</p>
                    </Parallax>
                    <Parallax className="pollutionParallax"
                        offsetXMin={-150}
                        offsetXMax={150}
                        offsetYMin={150}
                        offsetYMax={150}
                    >
                        <img src={GasTank} className="pollutionImage" alt="logo" />
                        <img src={Truck} className="pollutionImage" alt="logo" />
                    </Parallax>
                    <Parallax className="pollutionParallax"
                        offsetXMin={100}
                        offsetXMax={10}
                        offsetYMin={150}
                        offsetYMax={150}
                    >
                        <img src={Car} className="pollutionImage" alt="logo" />
                    </Parallax>                    
                    <Parallax className="pollutionParallax"
                        offsetYMin={-50}
                        offsetYMax={-50}
                    >
                        <img src={Oil} className="pollutionImage" alt="logo" />
                        <img src={GasPump} className="pollutionImage" alt="logo" />
                    </Parallax>
                    <Parallax className="pollutionParallax"
                        offsetYMin={0}
                        offsetYMax={0}
                        offsetXMin={150}
                        offsetXMax={-150}                        
                    >
                        <img src={Train} className="pollutionImage" alt="logo" />
                        <img src={Coal} className="pollutionImage" alt="logo" />
                    </Parallax>
                    <Parallax className="pollutionParallax"
                        offsetXMin={10}
                        offsetXMax={-10}
                    >
                        <img src={Cow} className="meatImage" alt="logo" />
                        <img src={Cow} className="meatImage" alt="logo" />
                    </Parallax>   
                    <Parallax className="pollutionParallax"
                        offsetXMin={-10}
                        offsetXMax={-10}
                    >
                        <img src={Waste} className="pollutionImage" alt="logo" />
                    </Parallax>                                                                                               
                    <Parallax className="pollutionParallax"
                        offsetYMin={-50}
                        offsetYMax={-50}
                    >
                        <p className="textBlack">So that we can reduce our carbon footprints.</p>
                    </Parallax>  
                </div>
            </div>
        );
  }
}


export default Pollution;