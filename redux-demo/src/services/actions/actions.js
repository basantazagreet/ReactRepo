import {ADD_TO_CART} from '../constants'
import { REMOVE_FROM_CART } from '../constants';

export const addToCart = (data) => {

    console.log("Add action"); 
    console.log(data); 
    
    return {
        type:ADD_TO_CART,
        data:data
    }
}
export const removeFromCart = () => {

    console.log("Remove action");
    
    
    return {
        type:REMOVE_FROM_CART,
    }
}