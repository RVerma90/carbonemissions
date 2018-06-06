import React, { Component } from 'react';

import './style.css';

import { Parallax } from 'react-scroll-parallax';

class Options extends Component {
    render() {
        return (
            <div className="Options">                                    
                <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
                    <div className="flipper">
                        <div className="front">
                            <p className="textBlack">Agriculture</p>
                        </div>
                        <div class="back">
                            back content
                        </div>
                    </div>
                </div>  
                <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
                    <div className="flipper">
                        <div className="front">
                            <p className="textBlack">Transportation</p>
                        </div>
                        <div class="back">
                            back content
                        </div>
                    </div>
                </div>  
                <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
                    <div className="flipper">
                        <div className="front">
                            <p className="textBlack">Recycling</p>                    
                        </div>
                        <div class="back">
                            back content
                        </div>
                    </div>
                </div>  
                <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
                    <div className="flipper">
                        <div className="front">
                            <p className="textBlack">Utilities</p>                            
                        </div>
                        <div class="back">
                            back content
                        </div>
                    </div>
                </div>  
            </div>
        );
  }
}

export default Options;
