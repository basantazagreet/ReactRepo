import React from "react";
import { CommonContext } from "./CommonContext";


//Another consumer of context
const UpdateButton = () => {


    return (
        <CommonContext.Consumer >
                {
                    ({updateColor}) => (
                        <div>
                        <button onClick={()=> updateColor("blue")}>Update color blue</button>
                        <button onClick={()=> updateColor("yellow")}>Update color Yellow</button>
                        </div>
                    )
                }

            </CommonContext.Consumer>
    );
}


export default UpdateButton;