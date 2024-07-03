import React from "react";

const Home = (props) => {
     console.log("From Home:");
     console.log(props);
    //Component will first go to container and to App


    return (
        <div>
            <h1>Home Component</h1>
            


            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="/iphone.png" alt="" />
                </div>
                <div className="text-wrapper item">
                    <span>I-phone</span>
                    <span>Price: $1000</span>

                </div>

                <div className="btn-wrapper item">
                    <button 
                    onClick={()=>{props.addToCartHandler({price:1000, name:"Iphone 12"}) }}   
                    className="btn">Add to cart</button>
                    
                </div>

                <div>
                <button 
                    onClick={()=>{props.removeFromCartHandler() }}   
                    className="btn remove-btn">Remove from cart</button>
                </div>
            </div>
        </div>
    );
}

export default Home;