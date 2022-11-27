import React, { Component } from 'react'
import './Input.css'
export default class Input extends Component {


inputHandle = ()=>{
console.log(" Yalnız .ru domenlərinə icazə verilir.")
}
parolHandle = ()=>{
    console.log(" Ən azı 8 simvol.")
}
  render() {
    return (
      <>
     <div className='div2'>

       <div className='ad'><p className='p1' ><b>Ad:</b></p>
       <input type="text" name="" id="" />
       </div>
       <div className='div3'>
<p className='p2'><b>Email:</b></p>
<input type="text" onClick={this.inputHandle}/>
       </div>
       <div className='div4'>
        <p className='p3'><b>Parol</b></p>
        <input type="text"  onClick={this.parolHandle}/>
       </div>
     </div>




      </>
    )
  }
}
