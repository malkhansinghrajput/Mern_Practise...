/*
In Function Component,
we do not have state, we have to use useState() hook method.It is async in nature.
useState(): It is a hook method which returns a stateful value, and a function to update it in a array.
Syntax:
const [statefulvalue,function] = useState(initialValue)
===============
We do not have life cycle methods like componentDidMount(),componentDidUpdate and 
componentWillUnMount(), we have useEffect() to replace all above methods.

*/

import React, { useState,useEffect } from 'react'

 const HookDemo1 = () => {
       const [count1,setCount1]=useState(20)
       const [count2,setCount2]=useState(50)
       const [show,setshow]=useState(true) 

       // componentDidMount()
      //  useEffect(()=>{
      //         console.log("Count1:",count1,"Count2:",count2)
      //  })

      // calling one time;
      // useEffect(()=>{
      //   console.log("Count1:",count1,"Count2:",count2)
      // },[])

    //  ComponentDidUpdate()
    useEffect(()=>{
      console.log("Count1:",count1, "Count2 :", count2);
    })

    // componentDidUpdate() update specific state
    // useEffect(()=>{
    //   console.log("Count1 :",count1,"Count2 :",count2);
    // },[count1,count2])

    const delChild = ()=>{
      setshow(false)
    }

  return (
    <div>
       <h1 className='title'>HookDemo1</h1>
       <h1>Count:{count1} </h1>
       <button style={{cursor: "pointer"}} onClick={()=>setCount1(count1+1)}>UpdateCount1</button>
       <h1>Count:{count2} </h1>
       <button onClick={()=> setCount2(count2+1)}>UpdateCount2</button>

       {show ? <Cart/> : <h1 style={{color:'red'}}>Component has been removed</h1> }
       <button onClick={delChild}>Delete Cart</button>
    </div>
  )
}


export const Cart = () => {
  return (
    <div>
      <h1 className='title'>Cart Component</h1>
    </div>
  )
}

export default HookDemo1