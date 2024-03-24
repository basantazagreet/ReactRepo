import React,{useState} from 'react';
import Child from './Child'

const ComponentWillUnmountDemo = () => {
    const [show, setShow] = useState(false);

    return(
        <>
        <h1>Eleven: ComponentWillUnmountDemo</h1>
        {show? <Child/>: <h2>Not rendered</h2> }
        <button onClick={() => setShow(!show)}>Show/Hide</button>
        </>
    );
}

export default ComponentWillUnmountDemo