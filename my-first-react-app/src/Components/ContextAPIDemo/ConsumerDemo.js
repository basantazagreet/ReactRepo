import React from "react";
import { CommonContext } from "./CommonContext";

class ConsumerDemo extends React.Component{

    


    render(){

        return(
            <CommonContext.Consumer >
                {
                    ({color}) => (
                        <h1 style={{backgroundColor:color}}>Hello, this is main page</h1>
                    )
                }

            </CommonContext.Consumer>
        );



    }



}

export default ConsumerDemo;