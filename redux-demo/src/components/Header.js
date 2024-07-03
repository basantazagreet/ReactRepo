import React from "react";

const Header = (props) => {
    console.log("From HEADER:");
     console.log(props);

    return (
        <>
        <h2>Header component</h2>
        <div className="add-to-cart">
                <img src="./add-to-cart.png" alt="" />
            </div>
        </>
        
    );
}

export default Header;