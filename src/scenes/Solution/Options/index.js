import React, { Component } from 'react';

import Farm from '../images/Agriculture_farm.png';
import Rake from '../images/Agriculture_rake.png';
import Barn from '../images/Agriculture_barn.png';
import Wheat from '../images/Agriculture_wheat.png';

import Brocolli from '../images/Food_broccolli.png';
import Chicken from '../images/Food_chicken.png';
import Eggplant from '../images/Food_eggplant.png';
import Fish from '../images/Food_fish.png';
import FruitVeg from '../images/Food_fruitveg.png';
import Ham from '../images/Food_ham.png';
import Meat from '../images/Pollution_meat.png';
import Onion from '../images/Food_onion.png';

import GasPump from '../images/Pollution_gaspump.png';

import Bike from '../images/Transport_bike.png';
import Train from '../images/Transport_train.png';
import Plane from '../images/Transport_plane.png';
import Car from '../images/Pollution_carparked.png';
import Van from '../images/Transport_van.png';

import RecycledBag from '../images/Recycle_recycledbag.png';
import RecycledBins from '../images/Recycle_recyclebins.png';
import WaterBottle from '../images/Recycle_bottle.png';
import Can from '../images/Recycle_can.png';

import Bills from '../images/Utility_bills.png';
import Electricity from '../images/Utility_electricity.png';
import GasStove from '../images/Utility_gasstove.png';
import Nuclear from '../images/Utility_nuclearpower.png';
import Solar from '../images/Utility_solar.png';
import Coal2 from '../images/Utility_coal1.png';
import Wind from '../images/Utility_wind.png';


import './style.css';

import { Parallax } from 'react-scroll-parallax';

class Options extends Component {
    render() {
        return (
            <div className="Options">
                <div>
                    <Parallax className="ecoChoices"
                        offsetXMin={-25}
                        offsetXMax={125}
                        offsetYMin={0}
                        offsetYMax={0}
                    >
                        <img src={Ham} className="meatImage addPadding" alt="logo" />
                        <img src={Meat} className="meatImage addPadding" alt="logo" />
                        <img src={Chicken} className="pollutionImage addPadding" alt="logo" />
                        <img src={Fish} className="pollutionImage addPadding" alt="logo" />
                        <img src={Coal2} className="pollutionImage addPadding" alt="logo" />
                        <img src={GasPump} className="meatImage addPadding" alt="logo" />
                        <img src={Van} className="pollutionImage addPadding" alt="logo" />
                        <img src={Car} className="meatImage addPadding" alt="logo" />
                        <img src={WaterBottle} className="meatImage addPadding" alt="logo" />
                        <img src={Can} className="meatImage addPadding" alt="logo" />
                    </Parallax>
                    <Parallax className="ecoChoices"
                        offsetXMin={0}
                        offsetXMax={0}
                        offsetYMin={300}
                        offsetYMax={-75}                        
                    >
                        <img src={Nuclear} className="pollutionImage addPadding" alt="logo" />
                        <img src={Solar} className="pollutionImage addPadding" alt="logo" />
                        <img src={Wind} className="pollutionImage addPadding" alt="logo" />
                        <img src={Electricity} className="pollutionImage addPadding" alt="logo" />
                        <img src={FruitVeg} className="pollutionImage addPadding" alt="logo" />
                        <img src={Brocolli} className="pollutionImage addPadding" alt="logo" />
                        <img src={Eggplant} className="pollutionImage addPadding" alt="logo" />
                        
                        <img src={Bike} className="pollutionImage addPadding" alt="logo" />
                        <img src={Rake} className="pollutionImage addPadding" alt="logo" />
                        <img src={Farm} className="pollutionImage addPadding" alt="logo" />
                        <img src={RecycledBag} className="pollutionImage addPadding" alt="logo" />
                        <img src={RecycledBins} className="pollutionImage addPadding" alt="logo" />
                    </Parallax>                                                                          
                    <Parallax className="ecoChoices"
                        offsetYMin={900}
                        offsetYMax={800}
                    >
                        <p className="textBlack">So that we can reduce our carbon footprints.</p>
                    </Parallax>  
                    
                </div>                                      
            </div>
        );
  }
}

export default Options;
