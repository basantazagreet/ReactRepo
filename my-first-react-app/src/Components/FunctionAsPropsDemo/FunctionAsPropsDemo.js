import React from "react";

const FunctionAsPropsDemo = (props) => {
    return(
        <>
        <h1>Ten: FunctionAsPropsDemo</h1>
        <button onClick={props.onRun}>Run Function from Parent</button>
        <button onClick={() => props.onRun()}>Run Function from Parent</button>
        <button onClick={props.onRun}>Run Function from Parent</button>
        </>
    );
}

export default FunctionAsPropsDemo;