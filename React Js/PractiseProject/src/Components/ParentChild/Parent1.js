import React,{useState} from 'react'
import Child1 from './Child1'

const Parent1 = () => {
  const [ name, setname] = useState("Malkhan singh")
  const [age, setage] = useState(24)

  const handleUpdate= (age) => {
    setage(age)
  }
  return (
    <div>
        <h1>Parent1 Component</h1>
        <h1>Name:{name}</h1>
        <h1>Age:{age}</h1>
        <hr></hr>
        <Child1 setAge={age} callback={handleUpdate} />
    </div>
  )
}
export default Parent1
