import React, { Component } from 'react';

import IntelligenceMain from './IntelligenceMain';
import Sea from './Sea';
import Generations from './Generations';


class Intelligence extends Component {
    render() {
        return (
            <div>
                <IntelligenceMain></IntelligenceMain>
                <Sea></Sea>
                <Generations></Generations>
            </div>
        );
    }
}

export default Intelligence;
