import React, { Component } from 'react';
import whale from '../images/whale.png';
import dolphine from '../images/dolphine.png';
import './style.css';

import { Parallax } from 'react-scroll-parallax';

class Intelligence extends Component {
    render() {
        return (
            <div className="Intelligence">
                    <Parallax
                        offsetYMin={-800}
                        offsetYMax={-100}
                    >
                        <p className="text">Our story began here ~200000 years ago</p>
                    </Parallax>   
                    <Parallax
                        offsetXMin={-30}
                        offsetXMax={-20}
                        className="circle"
                    >
                    <img src={whale} className="species" alt="logo" />
                    </Parallax>                        
                    <Parallax
                        offsetXMin={75}
                        offsetXMax={-75}
                        className="circle"
                    >
                    <img src={dolphine} className="species" alt="logo" />
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

export default Intelligence;
