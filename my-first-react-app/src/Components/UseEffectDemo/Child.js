import React,{useEffect} from 'react';
import './child.module.scss'

const Child = (props) => {

    useEffect(
        () => {
            console.log("Child class useEffect on props count "+props.count)
        },
        [props.count]
    );
    useEffect(
        () => {
            console.log("Child class useEffect on props Data "+props.data)
        },
        [props.data]
    );

    return (
        <>
        <p className="child">
        The Count is {props.count}
        The Data is {props.data}
        </p>
        </>
    );
}


export default Child;