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
import Onion from '../images/Food_onion.png';

import Bike from '../images/Transport_bike.png';
import Train from '../images/Transport_train.png';
import Van from '../images/Transport_van.png';

import RecycledBag from '../images/Recycle_recycledbag.png';
import RecycledBins from '../images/Recycle_recyclebins.png';
import WaterBottle from '../images/Recycle_waterbottle.png';

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
                <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
                    <div className="flipper">
                        <div className="front">
                            <p className="textBlack">Agriculture</p>
                            <div>
                                <img src={Farm} className="imageSmall" alt="logo" />
                                <p className="textBlack2">Extreme Weather</p>
                            </div>
                            <div>
                                <img src={Barn} className="imageSmall" alt="logo" />
                                <p className="textBlack2">Extreme Weather</p>
                            </div>                            
                            <div>
                                <img src={Rake} className="imageSmall" alt="logo" />
                                <p className="textBlack2">Extreme Weather</p>
                            </div>                                                        
                        </div>
                        <div class="back">
                            back content
                        </div>
                    </div>
                </div>  
                <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
                    <div className="flipper">
                        <div className="front">
                            <p className="textBlack">Transportation</p>
                            <div>
                                <img src={Train} className="imageSmall" alt="logo" />
                                <p className="textBlack2">Extreme Weather</p>
                            </div>
                            <div>
                                <img src={Van} className="imageSmall" alt="logo" />
                                <p className="textBlack2">Extreme Weather</p>
                            </div>  
                            <div>
                                <img src={Bike} className="imageSmall" alt="logo" />
                                <p className="textBlack2">Extreme Weather</p>
                            </div>                                                                                     
                        </div>
                        <div class="back">
                            back content
                        </div>
                    </div>
                </div>  
                <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
                    <div className="flipper">
                        <div className="front">
                            <p className="textBlack">Recycling</p>                    
                            <div>
                                <img src={RecycledBag} className="imageSmall" alt="logo" />
                                <p className="textBlack2">Extreme Weather</p>
                            </div>
                            <div>
                                <img src={RecycledBins} className="imageSmall" alt="logo" />
                                <p className="textBlack2">Extreme Weather</p>
                            </div>                    
                            <div>
                                <img src={WaterBottle} className="imageSmall" alt="logo" />
                                <p className="textBlack2">Extreme Weather</p>
                            </div>                                                         
                        </div>
                        <div class="back">
                            back content
                        </div>
                    </div>
                </div>  
                <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
                    <div className="flipper">
                        <div className="front">
                            <p className="textBlack">Utilities</p>                            
                            <div>
                                <img src={Nuclear} className="imageSmall" alt="logo" />
                                <p className="textBlack2">Extreme Weather</p>
                            </div>
                            <div>
                                <img src={Solar} className="imageSmall" alt="logo" />
                                <p className="textBlack2">Extreme Weather</p>
                            </div>                    
                            <div>
                                <img src={Wind} className="imageSmall" alt="logo" />
                                <p className="textBlack2">Extreme Weather</p>
                            </div>                                
                            <div>
                                <img src={Electricity} className="imageSmall" alt="logo" />
                                <p className="textBlack2">Extreme Weather</p>
                            </div>          
                            <div>
                                <img src={GasStove} className="imageSmall" alt="logo" />
                                <p className="textBlack2">Extreme Weather</p>
                            </div>                                                                  
                        </div>
                        <div class="back">
                            back content
                        </div>
                    </div>
                </div>  
            </div>
        );
  }
}

export default Options;
