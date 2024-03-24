import React,{useState} from 'react';
import './Hero.css';

class Hero extends React.Component{

  constructor(){
    super();
    this.state = {
      user: 3
    }
  }
   render(){ 
    
    return (
      <>
      <h1>One: Hero </h1>
      <div>
      {
        this.state.user==1?
        <h3> Hero Section for user 1 </h3>
        :this.state.user==2?
        <h3> Hero Section for user 2 </h3>
        :this.state.user==3?
        <h3> Hero Section for user 3 </h3>
        :<h3> Hero Section for user 4 </h3>
      }
      </div>
        <button>Hello button </button>
      </>
        );
   }
}


export default Hero;