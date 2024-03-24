import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function Login(){

    const login = () =>{
        localStorage.setItem('login', true);
    }
    const navigate = useNavigate();

    useEffect(() => {
        let login = localStorage.getItem('login');

        if(login){
            navigate('/');
        }
    });

    return(
        <>
        <h2>Login Page</h2>
        <input type="text"/>
        <input type="text"/>
        <button onClick={login}>Login</button>
        </>
    );
}



export default Login;