import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

function Contact(){

    const location = useLocation();
    console.log(location);

    return(
        

        <div>
        <h1>Hello From Contact</h1>
        <Link to="company">Company</Link>
        <Link to="job">Job</Link>
        <Link to="other">Other</Link>
        <Outlet/>
        </div>
    );
}

export default Contact;