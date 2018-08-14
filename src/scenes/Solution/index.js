import React, { Component } from 'react';

import SolutionMain from './SolutionMain';
import Pollution from './Pollution';
import Options from './Options';
import Word from './Word';

class Burden extends Component {
    render() {
        return (
            <div>
                <SolutionMain></SolutionMain>
                <Pollution></Pollution>
                <Options></Options>
                <Word></Word>
            </div>
        );
    }
}

export default Burden;
