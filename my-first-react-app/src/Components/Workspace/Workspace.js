import {useState} from "react";


const Workspace = () => {

    const [name, setName] = useState('Basanta');
    const welcome = () => {
        setName('Hemanta');
    }
    console.log('Rerendered');
    return (
        <>
        <h1>Four Workspace</h1>
        <h3>Hello {name}</h3>
        <button onClick={welcome}>welcome</button>
        </>

    );
};

export default Workspace;

