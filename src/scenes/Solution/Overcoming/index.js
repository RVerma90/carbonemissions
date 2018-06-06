import React, { Component } from 'react';
import Whale from '../images/whale.png';
import Dolphine from '../images/dolphine.png';
import BathySphere from '../../../components/BathySphere';

import './style.css';

import { Parallax } from 'react-scroll-parallax';

class Overcoming extends Component {
    render() {
        return (
            <div className="Overcoming">
                <div>
                    <p className="textBlack">Reducing our personal carbon footprint shouldn't have to be impossible.</p>
                    <br/>
                    <p className="textBlack">The most important thing is to occasionally adjust our habits, gradually becoming better in the process.</p>
                </div>                                       
            </div>
        );
  }
}

export default Overcoming;
