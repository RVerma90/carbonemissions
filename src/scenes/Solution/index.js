import React, { Component } from 'react';

import SolutionMain from './SolutionMain';
import Emissions from './Emissions';

class Burden extends Component {
    render() {
        return (
            <div>
                <SolutionMain></SolutionMain>
                <Emissions></Emissions>
            </div>
        );
    }
}

export default Burden;
