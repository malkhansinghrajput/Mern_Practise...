import React,{useState} from 'react'

const Child1 = (props) => {
  return (
    <div>
        <h1>Child1 Component</h1>
        <button onClick={() => props.callback(props.setAge + 1)}>UpdateAge</button>
    </div>
  )
}
export default Child1