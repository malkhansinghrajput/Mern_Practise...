/*
Class Components: These are ES6 classes that extends the React.Component class. They can manage their own state and have lifecycle methods, making them suitable for more complex logic and stateful behavior.
Syntax:
    class Welcome extends React.Component {
      render() {
        return (<h1>Hello, {this.props.name}</h1>);
      }
    }      
*/ 

import React from "react";

class Employee extends React.Component{
       render(){
              return(
             <div>
               <h1 style={{backgroundColor:'red', color:'white',padding:'20', borderRadius:'10', borderBlockColor:'black' }}>Employee Detail</h1>
               <div  style={{backgroundColor:'green', color:'white' }}>
               <h1>Name :{this.props.name}</h1>
               <h1>Id :{this.props.id}</h1>
               <h1>Salary :{this.props.salary}</h1>
               <h1>Designation :{this.props.disignation}</h1>
               </div>

             </div>
              )
       }
}
export default Employee