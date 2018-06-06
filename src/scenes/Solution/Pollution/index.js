import React, { Component } from 'react';
import Whale from '../images/whale.png';
import Dolphine from '../images/dolphine.png';
import BathySphere from '../../../components/BathySphere';

import './style.css';

import { Parallax } from 'react-scroll-parallax';

class Pollution extends Component {
    render() {
        return (
            <div className="Pollution">
                <div>
                    <p className="textBlack">Understanding where greenhouse gases come from is important.</p>
                    <br/><p className="textBlack">They come from activitities around agriculture, transportation,recycling and utilities.</p>                
                </div>                                       
            </div>
        );
  }
}

export default Pollution;
