import React, { Component } from 'react';
import './style.css';

import { Parallax } from 'react-scroll-parallax';

import Dude from '../../../components/Human';
import Ray from '../../../components/Ray';
import Circle from '../../../components/Circle';


class Main extends Component {
    render() {
        return (
            <div className="Main">
                <Parallax
                    offsetYMin={100}
                    offsetYMax={200}
                >
                    <h1 className="title">Buddhi</h1>
                    <h2 className="subtitle">Intelligence</h2>
                </Parallax>  
                <Parallax
                    offsetYMin={100}
                    offsetYMax={0}
                >
                <Circle></Circle>
                </Parallax>                  
                <Parallax
                    offsetYMin={200}
                    offsetYMax={-200}
                >
                <Ray></Ray>
                </Parallax>                                                                          
                <Parallax
                    offsetYMin={-100}
                    offsetYMax={-50}
                >
                <Dude></Dude>
                </Parallax>                       
            </div>
        );
  }
}

export default Main;
