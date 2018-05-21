import React, { Component } from 'react';

import JourneyMain from './JourneyMain';
import Earth from './Earth';
import TheSolarSystem from './TheSolarSystem';
import SunEarth from './SunEarth';
import Wolf from './Wolf';


class Journey extends Component {
    render() {
        return (
            <div>
                <JourneyMain></JourneyMain>
                <Earth></Earth>
                <TheSolarSystem></TheSolarSystem>
                <SunEarth></SunEarth>
                <Wolf></Wolf>
            </div>
        );
    }
}

export default Journey;
