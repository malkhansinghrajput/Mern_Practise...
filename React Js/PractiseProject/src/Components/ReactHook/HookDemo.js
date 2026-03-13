/*
In Function Component,
we do not have state, we have to use useState() hook method.It is async in nature.
useState(): It is a hook method which returns a stateful value, and a function to update it in a array.
Syntax:
const [statefulvalue,function] = useState(initialValue)
===============

*/
import React, {useState} from 'react'

const HookDemo = () => {

const [count1,setcount1]=useState(10)
const [count2,setcount2]=useState(30)

  return (
    <div>
      <h1 className='title'>HookDemo</h1>
      <h1>Count1: {count1} </h1>
      <button onClick={()=>setcount1(count1+1)}>Update1</button>

      <h1>Count1: {count2} </h1>
      <button onClick={()=>setcount2(count2+1)}>UpdateCount2</button>
    </div>
  )
}
export default HookDemo