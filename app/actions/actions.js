import * as actionTypes from './actionTypes';

export const addNumber = num => ({ type: actionTypes.ADD, num });

export const subNumber = num => ({ type: actionTypes.SUB, num });

export const multiNumber = num => ({ type: actionTypes.MULTI, num });

export const diviNumber = num => ({ type: actionTypes.DIVI, num });

export const resetNumber = num => ({ type: actionTypes.RESET, num });

export const countNumber = num => ({ type: actionTypes.CALCULATE, num });

export const inputNumber = num => ({ type: actionTypes.NUM, num });
