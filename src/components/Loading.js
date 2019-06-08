import React from 'react';
// import loadingCat from '../images/loadingcat.gif';
import charmander from '../images/charmander.gif';

const Loading = (props) => (
    <img
    style = {{width: props.width,
            height: props.height}} // allow this to have some props
    src = {charmander}
    alt="hewwo?"
    />
);

export default Loading;


