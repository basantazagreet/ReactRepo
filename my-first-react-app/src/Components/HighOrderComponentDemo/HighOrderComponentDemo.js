import React,{useState} from 'react'


function HighOrderComponentDemo(){


return(
    <>
    <h1>Eighteen: HighOrderComponentDemo</h1>
    <HOCRed cmp={Child}/>
    <HOCGreen cmp={Child}/>
    <HOCBlue cmp={Child}/>
    </>
);


}

function HOCRed(props){
    return(
        <>
<h2 style={{backgroundColor:'red', width:'300px', height:'300px'}}><props.cmp/></h2>
        </>
    );
}
function HOCGreen(props){
    return(
        <>
<h2 style={{backgroundColor:'green', width:'300px', height:'300px'}}><props.cmp/></h2>
        </>
    );
}
function HOCBlue(props){
    return(
        <>
<h2 style={{backgroundColor:'blue', width:'300px', height:'300px'}}><props.cmp/></h2>
        </>
    );
}



function Child(){
    const [count, setCount] = useState(0);


    return(
        <>
        Count: {count}
        <button onClick={()=>setCount(count+1)}>Increase Count</button>
        </>
    );
}


export default HighOrderComponentDemo