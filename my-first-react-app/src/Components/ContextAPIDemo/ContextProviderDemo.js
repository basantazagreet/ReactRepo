import React from "react";
import { CommonContext } from "./CommonContext";
import ConsumerDemo from './ConsumerDemo';
import UpdateButton from "./UpdateButton";

class ContextProviderDemo extends React.Component{

    constructor(){
        super();
        this.updateColor = (color) => {
            this.setState(
                {
                    color:color
                }
            )
        }
        this.state={  color:"green",
            updateColor:this.updateColor
        };

        
    }



    render(){

        return(
            
            <CommonContext.Provider value={this.state}>
                <h1>Complete and easy example for context api</h1>
                <ConsumerDemo/>
                <UpdateButton/>
            </CommonContext.Provider>
        );



    }



}

export default ContextProviderDemo;