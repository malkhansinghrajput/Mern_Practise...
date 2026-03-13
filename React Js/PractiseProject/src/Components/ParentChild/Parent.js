import React,{useState} from 'react'
import Child from "./Child"

export const Parent = () => {
    const [ name, setState ] = useState("Ankit Sharma")
    const [ age, setAge ]= useState(23)
  return (
    <div>
        <h1>Parent Component</h1>
        <Child setAge={age}  setName={name} />
    </div>
  )
}
export default Parent