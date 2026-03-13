/*
JSX: Javasccript XML(eXtensible markUp Language) It allows us to write HTMl code into Javascript and place them into the DOM without using appendChild() and createElement() method. it Convert HTML Tag into React Element.
it is not neccessary to use JSX to create React
Element but it is more elegant to create Element.
*/


import React from 'react'

// Create React Element without JSX
const ele1 = React.createElement("P",{
       style:{
        backgroundColor:'darkgoldenrod',
        color:'white',
        border: "4px solid black",
        margin: 20,
        padding: 20,
        fontSize: 24,
        fontWeight: 'bold'
       }
}, "Create React Element Without JSX ")

// Create React Element With JSX

const ele2 = <p
style={{
  backgroundColor: 'teal',
  color: 'white',
  border: "4px solid black",
  borderRadius: 10,
  margin: 20,
  padding: 20,
  fontSize: 24,
  fontWeight: 'bold'
}}
>Create React Element Using JSX</p>

const calculate = (x,y) => {
  if(x>y){
    return <h1 className='add'>Addition is:{x+y}</h1>
  }else{
    return <h1 style={{color: 'white', backgroundColor:'green', borderRadius: 10, border:'4px solid black',margin:20, padding:20,fontWeight:'bold'}}> Multiplication is : {x*y} </h1>
  }
}

export const JSXDemo = () => {
  return (
    <>
    {ele1}
    {ele2}
    {calculate(5,6)}
    </>
  )
}
