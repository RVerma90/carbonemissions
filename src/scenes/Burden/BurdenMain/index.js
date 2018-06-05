import React, { Component } from 'react';
import './style.css';

import {Animated} from "react-animated-css";
import { Parallax } from 'react-scroll-parallax';

import SeaRock from '../images/searock.png';
import Coral1 from '../../../components/Corals/Coral1';
import Coral2 from '../../../components/Corals/Coral2';
import Coral3 from '../../../components/Corals/Coral3';

class GlobalWarming extends Component {
    render() {
        return (
            <div className="GlobalWarming">
                
                <div className="corals">
                    <div className="seaRock">
                        <img src={SeaRock} />
                    </div>
                    <div className="coral1">
                        <Coral1 >
                        </Coral1>
                    </div>
                    <div className="coral2">
                        <Coral2 >
                        </Coral2>                        
                    </div>
                    <div className="coral3">
                        <Coral3 >
                        </Coral3>                        
                    </div>                    
                </div>
                <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
                    <Parallax
                        offsetYMin={100}
                        offsetYMax={-150}
                    >
                        <h1 className="title">Bojh</h1>
                        <h2 className="subtitle">Burden</h2>
                    </Parallax>   
                </Animated> 
            </div>
        );
  }
}

export default GlobalWarming;
