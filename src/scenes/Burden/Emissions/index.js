import React, { Component } from 'react';
import Whale from '../images/whale.png';
import Dolphine from '../images/dolphine.png';
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
                    <img src={Whale} className="species" alt="logo" />
                    </Parallax>                        
                    <Parallax
                        offsetXMin="200px"
                        offsetXMax="-350px"
                        offsetYMin="50px"
                        offsetYMax="150px"                        
                    >
                    <img src={Dolphine} className="species" alt="logo" />
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
