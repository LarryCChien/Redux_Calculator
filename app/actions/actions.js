import {
    ADD,
    SUB,
    MULTI,
    DIVI,
    RESET,
    CALCULATE,
} from './actionTypes';

export const addNumber = num => ({ type: ADD, num });

export const subNumber = num => ({ type: SUB, num });

export const multiNumber = num => ({ type: MULTI, num });

export const diviNumber = num => ({ type: DIVI, num });

export const resetNumber = num => ({ type: RESET, num });

export const countNumber = num => ({ type: CALCULATE, num });
