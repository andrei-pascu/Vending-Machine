import React, { Component } from 'react';
import EnterCode from './inputs/enter_code';
import EnterCredit from './inputs/enter_credit';

export default class InputsWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="inputs_wrapper">
                <EnterCode></EnterCode>
                <EnterCredit></EnterCredit>
            </div>
        )
    }
}