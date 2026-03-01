import React,{useState} from 'react'

const Child = (props) => {
  return (
    <div>
      <h1>Child Component</h1>
      <h1>Name:{props.setName}</h1>
      <h1>Age:{props.setAge}</h1>
    </div>
  )
}

export default Child