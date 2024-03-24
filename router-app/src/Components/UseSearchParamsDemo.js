import { useRef } from "react";
import React from "react";
import { useSearchParams } from "react-router-dom";

function UseSearchParamsDemo(){

    const [searchParams, setSearchParams] = useSearchParams();
    const age = searchParams.get('age');
    const name = searchParams.get('name');

    const myInputBox = useRef(null);

    const setParams = () => {
        setSearchParams({name: myInputBox.current.value})
    }

    return(
        <>
        <h2>Name from searchParams: {name} and age: {age}</h2>
        <input type="text" ref={myInputBox}/>
        <button onClick={setParams}>Set Params</button>
        </>
    );
}

export default UseSearchParamsDemo;