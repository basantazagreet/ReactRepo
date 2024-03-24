import React, { useRef } from "react";
import Child from "./Child";

const UseRefDemo = () => {

    let myInputBox = useRef(null);
    let InputEL = useRef(null);


    const showInConsole = () => {
        console.log(myInputBox)
        console.log(myInputBox.current.value);
    }
    const showForwardRefInConsole = () => {
        console.log(InputEL)
        console.log(InputEL.current.value);
    }


    return (

        <>
            <h1>Seventeen: UseRefDemo</h1>
            <input type="text" ref={myInputBox} />
            <button onClick={showInConsole}>Show in console</button>
            <button onClick={showForwardRefInConsole}>Show ForwardRef in console</button>
            <Child ref={InputEL}/>
        </>


    );
}

export default UseRefDemo;