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

import Bike from '../images/Transport_bike.png';
import Train from '../images/Transport_train.png';
import Plane from '../images/Transport_plane.png';
import Car from '../images/Pollution_carparked.png';
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
                <div>
                    <img src={Meat} className="meatImage" alt="logo" />
                </div>  
                <div>
                    <img src={Chicken} className="pollutionImage" alt="logo" />
                </div>  
                <div className="impactItem">
                    <img src={Fish} className="pollutionImage" alt="logo" />
                </div>  
                <div className="impactItem">
                    <img src={Coal2} className="pollutionImage" alt="logo" />
                </div>  
                <div className="impactItem">
                    <img src={Van} className="pollutionImage" alt="logo" />
                </div>   
                <div>
                    <img src={Car} className="meatImage" alt="logo" />
                </div>  
                <div>

                    <Parallax className="pollutionParallax"
                        offsetXMin={-10}
                        offsetXMax={-10}
                    >
                        <img src={Nuclear} className="pollutionImage" alt="logo" />
                    </Parallax>
                    <Parallax className="pollutionParallax"
                        offsetXMin={-10}
                        offsetXMax={-10}
                    >
                        <img src={Solar} className="pollutionImage" alt="logo" />
                    </Parallax>
                    <Parallax className="pollutionParallax"
                        offsetXMin={-10}
                        offsetXMax={-10}
                    >
                        <img src={Wind} className="pollutionImage" alt="logo" />
                    </Parallax> 
                    <Parallax className="pollutionParallax"
                        offsetXMin={-10}
                        offsetXMax={-10}
                    >
                        <img src={FruitVeg} className="pollutionImage" alt="logo" />
                    </Parallax>
                    <Parallax className="pollutionParallax"
                        offsetXMin={-10}
                        offsetXMax={-10}
                    >
                        <img src={Bike} className="pollutionImage" alt="logo" />
                    </Parallax>
                    <Parallax className="pollutionParallax"
                        offsetXMin={-10}
                        offsetXMax={-10}
                    >
                        <img src={Rake} className="pollutionImage" alt="logo" />
                    </Parallax>  
                    <Parallax className="pollutionParallax"
                        offsetXMin={-10}
                        offsetXMax={-10}
                    >
                        <img src={Farm} className="pollutionImage" alt="logo" />
                    </Parallax>
                    <Parallax className="pollutionParallax"
                        offsetXMin={-10}
                        offsetXMax={-10}
                    >
                        <img src={RecycledBag} className="pollutionImage" alt="logo" />
                    </Parallax>                            
                    <Parallax className="pollutionParallax"
                        offsetXMin={-10}
                        offsetXMax={-10}
                    >
                        <img src={RecycledBins} className="pollutionImage" alt="logo" />
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

export default Options;
