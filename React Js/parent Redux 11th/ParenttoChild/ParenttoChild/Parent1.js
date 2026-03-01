import React, { useState } from 'react'
import Child1 from './Child1'

const Parent1 = () => {
  const [name, setname] = useState("Rahul Sharma")
  const [age, setage] = useState(23)

  const handleUpdate=(age)=>{
    setage(age)
  }  

  return (
    <div>
      <h1>Parent Component</h1>
      <h1>Name:{name}</h1>
      <h1>Age:{age}</h1>
      <hr></hr>
      <Child1 setAge={age} callback={handleUpdate} />
    </div>
  )
}

export default Parent1