import React, {useState} from 'react';

const InputDemo = () => {
    const [name, setName] = useState('');
    const [show, setShow] = useState(false);

    const inputHandler = e => {
        setName(e.target.value);
    }

    const showHandler = () => {
        setShow(!show);
    }
    return(
<>
<h1>Seven InputDemo</h1>
{show?<h3>My name from input box is "{name}"</h3> : null}

<input type="text" onChange={inputHandler}/>
<button onClick={showHandler}>Toggle</button>
</>
    );
}

export default InputDemo;