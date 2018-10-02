import React from 'react';

const btnFunc = (text, clickFunc) => (
    <button type="button" onClick={(e) => { e.preventDefault(); clickFunc(); }}>{text}</button>
);

export default btnFunc;
