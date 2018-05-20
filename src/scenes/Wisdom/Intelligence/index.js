import React, { Component } from 'react';
import Whale from '../images/whale.png';
import Dolphine from '../images/dolphine.png';
import BathySphere from '../../../components/BathySphere';

import './style.css';

import { Parallax } from 'react-scroll-parallax';

class Intelligence extends Component {
    render() {
        return (
            <div className="Intelligence">
                    <Parallax
                        offsetYMin="600px"
                        offsetYMax="400px"
                    >
                        <p className="text">We have a few intelligent represenatives on our planet,</p>
                    </Parallax>   
                    <Parallax
                        offsetXMin={-30}
                        offsetXMax={-20}
                    >
                    <img src={Whale} className="species" alt="logo" />
                    </Parallax>                        
                    <Parallax
                        offsetXMin={75}
                        offsetXMax={-75}
                    >
                    <img src={Dolphine} className="species" alt="logo" />
                    </Parallax>                                            
                    <Parallax
                        offsetYMin={1000}
                        offsetYMax={100}
                    >
                        <p className="text">but none have proven to be as adventerous or curious as humans.</p>
                    </Parallax>  
`                    <Parallax
                        offsetYMin={100}
                        offsetYMax={-100}
                    >
                        <BathySphere></BathySphere>
                    </Parallax>    `                                       
            </div>
        );
  }
}

export default Intelligence;
