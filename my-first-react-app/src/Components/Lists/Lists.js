import React from "react";

const Lists = () => {

 const Students = [
    {name: "Basanta", contact:"9869047383", address:[{city: "Gaindakot", province: "Gandaki", country: "Nepal"}]},
    {name: "Badri", contact:"9869047383", address:[{city: "Gaindakot", province: "Gandaki", country: "Nepal"}]},
    {name: "Basu", contact:"9869047383", address:[{city: "Gaindakot", province: "Gandaki", country: "Nepal"}]},
   
 ]

return(
    <>
    <h1>Thirteen Lists</h1>
    <table border="1">
        <tbody>
    <tr>
        <td>Name</td>
        <td>Address</td>
        <td>Contact</td>
    </tr>
    {Students.map((data,i)=>
        <tr key={i}>
            data.phone==111
        <td>{i+1}</td> 
        <td>{data.name}</td> 
        <td>{data.contact}</td> 
        <td>
        <table>
            <tbody>
        {
            data.address.map((item)=>
           <tr>
            <td>{item.city}</td> 
            <td>{item.province}</td> 
            <td>{item.country}</td> 
            </tr>
            )
        }
         </tbody>
        </table>        
        </td> 
        </tr>
    )}
    </tbody>
    </table>
    </>
);





}


export default Lists;