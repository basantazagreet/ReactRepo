import React, {useState} from "react";

const StateWithObjects = () => {

    const [data, setData] = useState({name:"Basanta", address:"Gaindakot"});


    return (
        <>
        <h1>State with objects demo</h1>

        <input type="text" onChange={(e) => {setData({...data , name:e.target.value})} }  value={data.name}/>
        <input type="text" onChange={(e) => {setData({...data , address:e.target.value})} }  value={data.address}/>
        
        <h3>{data.name}</h3>
        <h3>{data.address}</h3>
        
        </>


    );


}

export default StateWithObjects;