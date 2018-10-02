import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import BtnFunc from '../components/button';

const ClickBtn = connect()(({ dispatch }) => (
    <div>
        <div>
            <BtnFunc text={1} onClick={() => dispatch(actions.inputNumber(1))} />
            <BtnFunc text={2} onClick={() => dispatch(actions.inputNumber(2))} />
            <BtnFunc text={3} onClick={() => dispatch(actions.inputNumber(3))} />
        </div>
        <div>
            <BtnFunc text={4} onClick={() => dispatch(actions.inputNumber(4))} />
            <BtnFunc text={5} onClick={() => dispatch(actions.inputNumber(5))} />
            <BtnFunc text={6} onClick={() => dispatch(actions.inputNumber(6))} />
        </div>
        <div>
            <BtnFunc text={7} onClick={() => dispatch(actions.inputNumber(7))} />
            <BtnFunc text={8} onClick={() => dispatch(actions.inputNumber(8))} />
            <BtnFunc text={9} onClick={() => dispatch(actions.inputNumber(9))} />
        </div>
        <div>
            <BtnFunc text={0} onClick={() => dispatch(actions.inputNumber(0))} />
            <BtnFunc text="=" onClick={() => dispatch(actions.countNumber())} />
        </div>
        <div>
            <BtnFunc text="+" onClick={() => dispatch(actions.addNumber())} />
            <BtnFunc text="-" onClick={() => dispatch(actions.subNumber())} />
            <BtnFunc text="X" onClick={() => dispatch(actions.multiNumber())} />
            <BtnFunc text="/" onClick={() => dispatch(actions.diviNumber())} />
        </div>
    </div>
));

export default ClickBtn;
