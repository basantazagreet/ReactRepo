import React, {useState} from "react";

const FetchDemo = () => {

const [name, setName] = useState("");
const [address, setAddress] = useState("");
const [contact, setContact] = useState("");
const [id, setID] = useState("");


function saveUser(){
    let data = {name, address, contact, id};
    fetch("http://localhost:3000/Restaurants",{
        method:"POST",
        headers:{
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(data)

    }).then((result) => {
        
        //body return huncha
        result.json().then((resp) => {
            console.log(resp);
        } )
    })
}

return (

    <>
    <h1>Post API demo</h1>
    

    <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name"/> <br />
    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} name="address"/> <br />
    <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} name="contact"/> <br />
    <input type="text" value={id} onChange={(e) => setID(e.target.value)} name="id"/> <br />
    
    <button onClick={saveUser}>Send POST Data</button>
    
    
    </>

);




}

export default FetchDemo;