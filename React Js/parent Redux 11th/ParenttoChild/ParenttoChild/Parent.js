import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
  const [name, setname] = useState("Rahul Sharma")
  const [age, setage] = useState(23)

  return (
    <div>
      <h1>Parent Component</h1><hr></hr>
      <Child setAge={age} setName={name} />
    </div>
  )
}

export default Parent