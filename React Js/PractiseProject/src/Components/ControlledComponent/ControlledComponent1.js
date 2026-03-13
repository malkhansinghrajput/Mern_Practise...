import React, { Component } from 'react'

export default class ControlledComponent1 extends Component {
       constructor(props){
              super(props)
              this.state={
                     name:"",
                     age:0
              }
       }

       handleChange= (e)=>{
              const {name,value} = e.target
              console.log([name],value)
              const val= name=="name"? value.toUpperCase() : (name=="age" ? value.substr(0,2) : value)
              this.setState({
                     [name]:val
              })
       
       }
  render() {
    return (
      <div>
       <h1 className='title'>ControlledComponent1</h1>
       <input type='text' placeholder='Enter a Name' name='name' style={{ fontSize:28, fontWeight:'bold' }}
       value={this.state.name}
       onChange={this.handleChange} /><br></br>

        <input type='text' placeholder='Enter a age' name='age' style={{ fontSize:28, fontWeight:'bold' }}
       value={this.state.age}
       onChange={this.handleChange} /><br></br>
      </div>
    )
  }
}
