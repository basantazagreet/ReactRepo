import { useNavigate } from "react-router-dom";
import React from "react";


function UseNavigateDemo(){

    const navigate = useNavigate();

    return(
        <>
        <h1>Demo of UseNavigate</h1>
        <button>Goto Home</button>
        <button onClick={()=>navigate('/about')}>Goto About</button>
        </>
    );
}

export default UseNavigateDemo;