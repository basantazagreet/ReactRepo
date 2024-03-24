import React from 'react';
import { Link } from 'react-router-dom';
import UseNavigateDemo from '../Components/UseNavigateDemo';
import UseSearchParamsDemo from '../Components/UseSearchParamsDemo';

function Home(){
    return(

        <div>
        <h1>Hello From Home</h1>
        <Link to="/about">About</Link>
        <UseNavigateDemo/>
        <UseSearchParamsDemo/>
        </div>
    );
}

export default Home;