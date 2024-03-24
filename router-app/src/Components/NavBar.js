import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <ul className="top-bar">
            <li><NavLink to="/" className="react-router-links">Home</NavLink></li>
            <li><NavLink to="/about" className="react-router-links" >About</NavLink></li>
            <li><NavLink to="/searchparams" className="react-router-links" >SearchParams</NavLink></li>
            <li><NavLink to="/users/anil" className="react-router-links">UseParamsDemo</NavLink></li>
            <li><NavLink to="/users/peter" className="react-router-links">Peter</NavLink></li>
            <li><NavLink to="/contact" className="react-router-links" state={{name:"basanta"}}>Nested Routes</NavLink></li>
            <li><NavLink to="/login" className="react-router-links" >Login</NavLink></li>
        </ul>
    );
}

export default NavBar;