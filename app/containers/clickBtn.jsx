import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import BtnFunc from '../components/button';

const mapDispatchToProps = dispatch => ({
    inputNum: num => dispatch(actions.inputNumber(num)),
    addNum: () => dispatch(actions.addNumber()),
    subNum: () => dispatch(actions.subNumber()),
    multiNum: () => dispatch(actions.multiNumber()),
    diviNum: () => dispatch(actions.diviNumber()),
    countNum: () => dispatch(actions.countNumber()),
    resetNum: () => dispatch(actions.resetNumber()),
});
const ClickBtn = connect(
    null, // 沒有傳入 mapStateToProps ，所以用 null。
    mapDispatchToProps,
)(({
    inputNum, addNum, subNum, multiNum, diviNum, countNum, resetNum,
}) => (
    <div className="calculate__board">
        <div className="calculate__board--rows">
            <BtnFunc text={7} onClick={(e) => { e.preventDefault(); inputNum(7); }} />
            <BtnFunc text={8} onClick={(e) => { e.preventDefault(); inputNum(8); }} />
            <BtnFunc text={9} onClick={(e) => { e.preventDefault(); inputNum(9); }} />
            <BtnFunc text="+" onClick={(e) => { e.preventDefault(); addNum(); }} />
        </div>
        <div className="calculate__board--rows">
            <BtnFunc text={4} onClick={(e) => { e.preventDefault(); inputNum(4); }} />
            <BtnFunc text={5} onClick={(e) => { e.preventDefault(); inputNum(5); }} />
            <BtnFunc text={6} onClick={(e) => { e.preventDefault(); inputNum(6); }} />
            <BtnFunc text="-" onClick={(e) => { e.preventDefault(); subNum(); }} />
        </div>
        <div className="calculate__board--rows">
            <BtnFunc text={1} onClick={(e) => { e.preventDefault(); inputNum(1); }} />
            <BtnFunc text={2} onClick={(e) => { e.preventDefault(); inputNum(2); }} />
            <BtnFunc text={3} onClick={(e) => { e.preventDefault(); inputNum(3); }} />
            <BtnFunc text="X" onClick={(e) => { e.preventDefault(); multiNum(); }} />
        </div>
        <div className="calculate__board--rows">
            <BtnFunc text={0} onClick={(e) => { e.preventDefault(); inputNum(0); }} />
            <BtnFunc text="C" onClick={(e) => { e.preventDefault(); resetNum(); }} />
            <BtnFunc text="=" onClick={(e) => { e.preventDefault(); countNum(); }} />
            <BtnFunc text="/" onClick={(e) => { e.preventDefault(); diviNum(); }} />
        </div>
    </div>
));

export default ClickBtn;
