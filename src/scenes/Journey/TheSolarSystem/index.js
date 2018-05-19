import React, { Component } from 'react';

import {Animated} from "react-animated-css";
import { Parallax } from 'react-scroll-parallax';

import SolarSystem from '../../../components/SolarSystem';


class TheSolarSystem extends Component {
    render() {
        return (
            <div>
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

export default TheSolarSystem;
