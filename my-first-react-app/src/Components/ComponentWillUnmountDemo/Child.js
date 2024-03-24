import React, {useState} from 'react';


class Child extends React.Component{
    constructor(){
        super();
    }
    componentWillUnmount() {
        alert('Component will unmount');
    }
    render(){
    return(
        <>Hello from child component</>
    );
    }
}

export default Child;