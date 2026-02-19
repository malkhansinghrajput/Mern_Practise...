import React, { Component } from 'react'

export default class ControlleredComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      age: 0
    }
  }

  // handleChangeName=(e)=>{
  //   const {name,value} = e.target
  //   console.log(name,value)
  //   this.setState({
  //       name:value.toUpperCase()
  //   })
  // }
  // handleChangeAge=(e)=>{
  //   const {name,value} = e.target
  //   this.setState({
  //       age:value.substr(0,2)
  //   })
  //       console.log(name,value)
  // }

  handleChange = (e) => {
    const { name, value } = e.target
    console.log([name], value)
    const val = name === "name" ? value.toUpperCase() : (name === "age" ? value.substr(0, 2) : value)
    this.setState({
      [name]: val
    })
  }

  render() {
    return (
      <div>
        <h1 className='title'>Controllered Component</h1>
        <input type='text'
          placeholder='Enter a Name'
          name='name'
          style={{ fontSize: 28, fontWeight: 'bold' }}
          value={this.state.name}
          onChange={this.handleChange}
        // defaultValue={"Rahul Sharma"}
        /><br></br>
        <input type='text'
          placeholder='Enter a Age'
          name='age'
          style={{ fontSize: 28, fontWeight: 'bold' }}
          value={this.state.age}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}
