import React, { Component } from 'react';

import './style.css';

import { Parallax } from 'react-scroll-parallax';

class JoinWaitlist extends Component {
    render() {
        return (
            <div className="JoinWaitlist">                                   
                <div class="flip-container">
                    <div class="back"></div>
                    <div class="registration-form">
                        <header>
                            <h1>Sign Up</h1>
                            <p>Fill in all informations</p>
                        </header>
                        <form>
                            <div class="input-section email-section"><input class="email" type="email" placeholder="ENTER YOUR E-MAIL HERE" autocomplete="off" />
                                <div class="animated-button"><span class="icon-paper-plane"><i class="fa fa-envelope-o"></i></span><span class="next-button email"><i class="fa fa-arrow-up"></i></span></div>
                            </div>
                            <div class="success">
                                <p>ACCOUNT CREATED</p>
                            </div>
                        </form>
                    </div>                                                
                </div>  
            </div>
        );
  }
}

export default JoinWaitlist;
