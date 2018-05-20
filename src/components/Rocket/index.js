import React, { Component } from 'react';
import './style.css';

class Rocket extends Component {
    render() {
        return (
            <div class="Rocket">
                <div class="rocket">
                    <div class="rocket-body">
                        <div class="body"></div>
                        <div class="fin fin-left"></div>
                        <div class="fin fin-right"></div>
                        <div class="Rwindow"></div>
                        <div class="exhaust-flame"></div>
                        <ul class="exhaust-fumes"></ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Rocket;
