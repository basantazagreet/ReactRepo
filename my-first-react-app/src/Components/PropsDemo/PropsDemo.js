import React from 'react';

const PropsDemo = (props) => {
    return (
        <>
        <h1>Six PropsDemo</h1>
        <h3>Hello my name is {props.name}and I am from {props.other.address}. My contact number is {props.other.contact}</h3>
        </>
    );
}

export default PropsDemo;