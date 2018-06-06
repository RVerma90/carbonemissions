import React, { Component } from 'react';
import earth from '../images/earth.svg';
import './style.css';

import { Parallax } from 'react-scroll-parallax';

class Earth extends Component {
    render() {
        return (
            <div className="Earth">
                <div>
                    <Parallax
                        offsetYMin="-200px"
                        offsetYMax="-50px"
                    >
                        <p className="text">Our story began here ~200000 years ago</p>
                    </Parallax>   
                    <Parallax
                        offsetYMin="0px"
                        offsetYMax="0px"
                    >
                    <img src={earth} className="journeyImage" alt="logo" />
                    </Parallax>                        
                    <Parallax
                        offsetYMin="-50px"
                        offsetYMax="100px"
                    >
                        <p className="text">but our Planet Earth has been around for much longer, relasing more harmful gases.</p>
                    </Parallax>  
                </div>                     
            </div>
        );
  }
}

export default Earth;
