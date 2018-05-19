import React, { Component } from 'react';
import earth from '../images/earth.svg';
import './style.css';

import { Parallax } from 'react-scroll-parallax';

class Earth extends Component {
    render() {
        return (
            <div className="Earth">
                    <Parallax
                        offsetYMin={-800}
                        offsetYMax={-100}
                    >
                        <p className="text">Our story began here ~200000 years ago</p>
                    </Parallax>   
                    <Parallax
                        offsetYMin={0}
                        offsetYMax={0}
                        className="circle"
                    >
                    <img src={earth} className="journeyImage" alt="logo" />
                    </Parallax>                        
                    <Parallax
                        offsetYMin={1000}
                        offsetYMax={100}
                    >
                        <p className="text">but our Planet Earth has been around for much longer.</p>
                    </Parallax>                       
            </div>
        );
  }
}

export default Earth;
