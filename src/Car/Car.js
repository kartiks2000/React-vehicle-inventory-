import React from 'react';
import "./Car.css"


const Car = (props) => {
    return(
        <div className="Car">
            <h2>NAME: {props.name}</h2>
            <h3>MODEL: {props.model}</h3>
            <h3>COLOR: {props.color}</h3>
            <h3>PRICE: {props.price}</h3>
            <h3>SOLD: {props.sold? "yes":"no"}</h3>
            <button onClick={props.clicksold.bind(this,props.myid)}>Sold out</button>
            <button onClick={props.clickremove.bind(this,props.myid)}>Remove</button>
        </div>
    );
}

export default Car;