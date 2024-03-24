import React from "react";


const Child = (props) => {

    return (
        <>
        {/* Arrow function tara normal function kai params */}
            <button onClick={() => { props.helloChild('basanta') }}>Lift State Up</button>
        </>
    );
}


export default Child;