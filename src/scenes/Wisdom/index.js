import React, { Component } from 'react';

import Main from './Main';
import Intelligence from './Intelligence';
import Generations from './Generations';


class Journey extends Component {
    render() {
        return (
            <div>
                <Main></Main>
                <Intelligence></Intelligence>
                <Generations></Generations>
            </div>
        );
    }
}

export default Journey;
