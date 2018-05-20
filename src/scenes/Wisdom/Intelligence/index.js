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
                <div>
                    <Parallax
                        offsetYMin="50px"
                        offsetYMax="-50px"
                    >
                        <p className="text">We have a few intelligent represenatives on our planet,</p>
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
                        <p className="text">but none have proven to be as adventerous or curious as humans.</p>
                    </Parallax>  
`                    <Parallax
                        offsetYMin="200px"
                        offsetYMax="500px"
                    >
                        <BathySphere></BathySphere>
                    </Parallax>   
                </div> `                                       
            </div>
        );
  }
}

export default Intelligence;
