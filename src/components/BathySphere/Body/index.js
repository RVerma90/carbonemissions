import React, { Component } from 'react';
import '../style.css';

class Body extends Component {
    render() {
        return (
            <div className="sea">
                <div className="submarine-wrapper">
                    <div className="bubble"></div>
                    <div className="submarine-body">
                        <div className="window"></div>
                    </div>
                    <div className="hat">
                        <div className="leds-wrapper">
                            <div className="periscope"></div>
                            <div className="leds"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Body;
