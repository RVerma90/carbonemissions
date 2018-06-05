import React, { Component } from 'react';

import BurdenMain from './BurdenMain';
import Emissions from './Emissions';
import Impact from './Impact';
import Consumption from './Consumption';


class Burden extends Component {
    render() {
        return (
            <div>
                <BurdenMain></BurdenMain>
                <Emissions></Emissions>
                <Impact></Impact>                
                <Consumption></Consumption>
            </div>
        );
    }
}

export default Burden;
