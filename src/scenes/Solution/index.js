import React, { Component } from 'react';

import SolutionMain from './SolutionMain';
import Pollution from './Pollution';
import Overcoming from './Overcoming';

class Burden extends Component {
    render() {
        return (
            <div>
                <SolutionMain></SolutionMain>
                <Pollution></Pollution>
                <Overcoming></Overcoming>
            </div>
        );
    }
}

export default Burden;
