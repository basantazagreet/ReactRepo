import React from "react";


const Child = (props) => {
    return(
        <>
        {props.item.name}
        {props.item.contact}
        {props.item.address}
        </>
    );
}

export default Child;