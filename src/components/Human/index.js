import React, { Component } from 'react';
import './style.css';

import {Animated} from "react-animated-css";


class Human extends Component {
    render() {
        return (
            <div class="humanBG">
                <div class="human">
                    <div class="hat"></div>
                    <div class="head">
                    </div>
                    <div class="body">
                    <div class="top"></div>
                    <div class="left side"></div>
                    <div class="right side"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Human;
