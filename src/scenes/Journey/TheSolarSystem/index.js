import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
import SolarSystem from '../../../components/SolarSystem';


class TheSolarSystem extends Component {
    render() {
        return (
            <div>
                <Parallax>
                    <SolarSystem>
                    </SolarSystem>
                </Parallax>
            </div>
        );
    }
}

export default TheSolarSystem;
