import React from 'react';
import './Button.css';

const Button = (props) => {
    return <button className="Button" onClick={props.clickbtn}>Show/Hide</button>
}

export default Button;