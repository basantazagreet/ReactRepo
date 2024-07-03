import {connect} from 'react-redux'

import Header from "../components/Header";


//extract data from redux store and pass as props to connected component 
const mapStateToProps = state => ({
    data:state.cardItems
})

//dispatch action to the store. can be obj full of action or func that 
//returns an object
const mapDispatchToProps = dispatch => ({
    
})


export default connect(mapStateToProps,mapDispatchToProps)(Header)