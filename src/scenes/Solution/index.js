import React, { Component } from 'react';

import SolutionMain from './SolutionMain';
import Pollution from './Pollution';
import Overcoming from './Overcoming';
import Options from './Options';
import JoinWaitlist from './JoinWaitlist';

class Burden extends Component {
    render() {
        return (
            <div>
                <SolutionMain></SolutionMain>
                <Pollution></Pollution>
                <Overcoming></Overcoming>
                <Options></Options>
                <JoinWaitlist></JoinWaitlist>
            </div>
        );
    }
}

export default Burden;
