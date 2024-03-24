import React from 'react';


class ClassComponentDemo extends React.Component{

    constructor(){
        super();
        this.state = {
            name: 'Basanta',
            count: 0
        }
        console.log("ClassComponentDemo Constructor called")
    }
    changeName(){
        this.setState({name: "Hemanta"})
    }

    componentDidMount(){
        console.log("ClassComponentDemo componentDidMount called")
    }
    
    componentDidUpdate(prevprops, prevstates, snapshot){
        console.log("ClassComponentDemo componentDidUpdate called" + prevstates.name + prevstates.count)

    }

    shouldComponentUpdate(){
        if(this.state.count>5)
        return true;
        else
        return false;
        
    }

    render(){

        //app ma state ra passed as props vaye state change ma re render huncha
        console.log("ClassComponentDemo render called")
        return(
            <>
            <h1>Five ClassComponentDemo</h1>
            <h3>Hello {this.state.name} {this.state.count}</h3>
            <button onClick={()=> this.changeName()}>Change name</button>
            <button onClick={()=> this.setState({count: this.state.count+1})}>Increase Count</button>
            </>
        );
    }

}


export default ClassComponentDemo