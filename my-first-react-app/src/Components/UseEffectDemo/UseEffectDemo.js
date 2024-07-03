import React,{useEffect, useState} from 'react';
import Child from './Child';
import './UseEffectDemo.scss'

const UseEffectDemo = () => {

    const [count, setCount] = useState(0);
    const [data, setData] = useState(100);


    //The effect will only re-run if one of the dependencies change.
useEffect(
    ()=> {
        console.log("UseEffect demo: Useeffect on count called");
    },
[count]);
useEffect(
    ()=> {
        console.log("UseEffect demo: Useeffect on data called");
    },
[data]);


    return(
    <>
    <h1>Twelve: UseEffect Demo</h1>
    <h3 className="green-paragraph">The count is {count} and data is {data}</h3>
    <button onClick={()=> setCount(count+1)}>Increase count</button>
    <button onClick={()=> setData(data+1)}>Increase data</button>
    <Child data={data} count={count}/>
    </>
    
        );
}

export default UseEffectDemo;