import React, { Component } from 'react';
import earth from '../images/earth.svg';
import logo from '../images/milkyway.png';

import {Animated} from "react-animated-css";
import { Parallax } from 'react-scroll-parallax';

import SolarSystem from '../../components/SolarSystem';


class EarthHistory extends Component {
    render() {
        return (
            <div className="EarthHistory">
                <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
                    <Parallax>
                        <SolarSystem>
                        </SolarSystem>
                    </Parallax>
                </Animated>                   
            </div>
        );
    }
}

export default EarthHistory;
