import React, {useState, useEffect, useMemo} from "react";

const UseMemoDemo = () => {

const [data, setData] = useState(0);
const [count, setCount] = useState(0);

//normal function jun state change garda pani change huncha (both data ra count ma)
function hello() {
    console.log('Hello called, both ma kunai ek change huda huncha');
    return count *10;
    
}

//count update ma matra function call banauna
const newHello = useMemo(() => {console.log("Hello from useMemo, count change huda matra huncha"); return count*10}, [count]);


return(
    <>
    <h1>Sixteen: UseMemoDemo {count}</h1>

    {/* Function call ma () chaincha tara const (arrow function) ma chainna  */}
    <h3>Count from normal function is {hello()} Count from useMemo function is {newHello}</h3>
    <button onClick={() => setData(data+1)}>Set Data</button>
    <button onClick={() => setCount(count+1)}>Set count</button>
    </>
);

}





export default UseMemoDemo;