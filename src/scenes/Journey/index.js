import React, { Component } from 'react';

import Hero from './Hero';
import Earth from './Earth';
import TheSolarSystem from './TheSolarSystem';
import SunEarth from './SunEarth';


class Journey extends Component {
    render() {
        return (
            <div>
                <Hero></Hero>
                <Earth></Earth>
                <TheSolarSystem></TheSolarSystem>
                <SunEarth></SunEarth>
            </div>
        );
    }
}

export default Journey;
