import React, { Component } from 'react';
import CO2 from '../images/co2.png';
import Methane from '../images/methane.png';
import BathySphere from '../../../components/BathySphere';

import './style.css';

import { Parallax } from 'react-scroll-parallax';

class Emissions extends Component {
    render() {
        return (
            <div className="Emissions">
                <div>
                    <Parallax
                        offsetYMin="50px"
                        offsetYMax="-50px"
                    >
                        <p className="textBlack">CO2 and greenhouse gases are the main drivers of global warming.</p>
                    </Parallax>   
                    <Parallax
                        offsetXMin="-150px"
                        offsetXMax="50px"
                        offsetYMin="150px"
                        offsetYMax="-50px"
                    >
                    <img src={CO2} className="molecules" alt="logo" />
                    </Parallax>                        
                    <Parallax
                        offsetXMin="0px"
                        offsetXMax="-150px"
                        offsetYMin="50px"
                        offsetYMax="150px"                        
                    >
                    <img src={Methane} className="species" alt="logo" />
                    </Parallax>
                    <Parallax
                        offsetXMin="100px"
                        offsetXMax="-25px"
                        offsetYMin="50px"
                        offsetYMax="-80px"
                    >
                    <img src={CO2} className="molecules" alt="logo" />
                    </Parallax>                                                                                                    
                    <Parallax
                        offsetYMin="400px"
                        offsetYMax="200px"
                    >
                        <p className="textBlack">This causes many adverse impacts on our planet.</p>
                    </Parallax>  
                </div>                                       
            </div>
        );
  }
}

export default Emissions;
