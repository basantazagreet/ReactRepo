import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants";

//inital state define
const initalState={
    cardData:[]
}

export default function cardItems(state  = [], action){
    switch(action.type){
        case ADD_TO_CART:
            console.log("Add to cart Reducer");
            console.log(action);
            return [
                ...state,
                {cardData:action.data}
            ]
            
        case REMOVE_FROM_CART:
            console.log("Remove from cart Reducer");
            console.log(action);
            //Remove item from cart
            state.pop();
            return [
                ...state,
                
            ]
            

        default: 
           return state
    }
}