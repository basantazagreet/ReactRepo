import React from "react";
import Child from "./Child";

const ReusableComponent = () => {
    const Students = [{name: "Basanta", contact:"9869047383", address:"Gaindakot"},
    {name: "Badri", contact:"9869047383", address:"Gaindakot"},
    {name: "Basu", contact:"9869047383", address:"Gaindakot"}
    ];

    return(
        <>
        <h1>Fourteen: ReusableComponent Loop ma component run</h1>
        {Students.map((item)=> 
        <Child item={item}/>
        )}
        
        </>
    );
}


export default ReusableComponent;