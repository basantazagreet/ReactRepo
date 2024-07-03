import React, {useEffect, useRef} from "react";

function PreviousPropsDemo(props){

    //DOM bata last value uthaucha
    const lastVal = useRef();
    useEffect(()=>{
        //render huna vanda pahila nai value store garcha
        lastVal.current = props.count;
    })

    const prevVal = lastVal.current;
    return (
        <>
        <div>
            <h1>Previous props demo</h1>
            <h3>Current val : {props.count}</h3>
            <h3>Previous val : {prevVal}</h3>
            
        </div>
        </>
    );
}

export default PreviousPropsDemo;