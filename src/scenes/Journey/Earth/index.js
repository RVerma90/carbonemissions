import React, { Component } from 'react';
import earth from '../images/earth.svg';
import './style.css';

import { Parallax } from 'react-scroll-parallax';

class Earth extends Component {
    render() {
        return (
            <div className="Earth">
                    <Parallax
                        offsetYMin="-200px"
                        offsetYMax="10px"
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
                        offsetYMin="-150px"
                        offsetYMax="150px"
                    >
                        <p className="text">but our Planet Earth has been around for much longer.</p>
                    </Parallax>                       
            </div>
        );
  }
}

export default Earth;
