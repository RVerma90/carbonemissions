import React, { Component } from 'react';
import './style.css';

import {Animated} from "react-animated-css";


class EarthHistory extends Component {
    render() {
        return (
            <div className="solar-syst">
                <div className="sun"></div>
                <div className="mercury"></div>
                <div className="venus"></div>
                <div className="earth"></div>
                <div className="mars"></div>
                <div className="jupiter"></div>
                <div className="saturn"></div>
                <div className="uranus"></div>
                <div className="neptune"></div>
                <div className="pluto"></div>
                <div className="asteroids-belt"></div>
            </div>
        );
    }
}

export default EarthHistory;
