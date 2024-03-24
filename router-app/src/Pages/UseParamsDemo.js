import React from 'react';
import { useParams } from 'react-router-dom';



function UseParamsDemo() {

    const params = useParams();
    const { name } = params;

    return (
        <>
            <h3>Hello welcome, {name}</h3>
        </>
    );
}


export default UseParamsDemo;