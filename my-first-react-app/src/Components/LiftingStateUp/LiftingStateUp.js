import React from "react";
import Child from "./Child";


const LiftingStateUp = () => {

    const helloParent = (name) => {
        console.log("Lifting State up:" + name)
    }



    return (
        <>
            <h1>Fifteen: Lifting State Up</h1>
            <Child helloChild={helloParent} />
        </>
    );
}

export default LiftingStateUp;