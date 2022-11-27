import React, { Component } from 'react'
import './Button.css'
export default class Button extends Component {
   state = {
    text: "Click",
    clicked: false,
   };
   
    clickHandler = ()=>{
        this.setState({text:'Clicked',clicked:true})
        
   }
  render() { 
     const {text ,clicked}= this.state;
     let className = "btn1";
     if(clicked){
        className = "btn2"
     }
     
      
     
    return (
      <>
      <div className='div1'><button type='button' className={className} onClick={this.clickHandler}>{text}</button></div>
      </>
    )
  }
}


