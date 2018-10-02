import React from 'react';
import PropTypes from 'prop-types';

const BtnFunc = ({ text, onClick }) => (
    <button type="button" onClick={onClick}>{text}</button>
);

BtnFunc.propTypes = {
    text: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default BtnFunc;
