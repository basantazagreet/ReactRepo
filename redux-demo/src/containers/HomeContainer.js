import {connect} from 'react-redux'

import Home from "../components/Home";
import {addToCart, removeFromCart} from '../services/actions/actions'

//extract data from redux store and pass as props to connected component 
const mapStateToProps = state => ({
    cardData:state
})

//dispatch action to the store. can be obj full of action or func that 
//returns an object
const mapDispatchToProps = dispatch => ({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeFromCartHandler:data=>dispatch(removeFromCart(data))
})


export default connect(mapStateToProps,mapDispatchToProps)(Home)