/*
Class Components: These are ES6 classes that extends the React.Component class. They can manage their own state and have lifecycle methods, making them suitable for more complex logic and stateful behavior.
Syntax:
    class Welcome extends React.Component {
      render() {
        return (<h1>Hello, {this.props.name}</h1>);
      }
    }      
*/ 
import React,{Component} from 'react'; 


class Employee1 extends React.Component{
       render(){
              return(
         <div>
              {/* Calling another Component */}

              <Manager name="Manoj Sharma" id={232} salary={34567.34} exp={5} />

        

              <h1 style={{backgroundColor:'red', color:'white',padding:'20', borderRadius:'10', borderBlockColor:'black' }}>Employee Detail</h1>

               <div  style={{backgroundColor:'green', color:'white' }}>
               <h1>Name :{this.props.name}</h1>
               <h1>Id :{this.props.id}</h1>
               <h1>Salary :{this.props.salary}</h1>
               <h1>Designation :{this.props.designation} </h1>
               </div>

        </div>
              )
       }
}
class Manager extends Component{
       render(){
           return(
              <div>
              <h1 style={{backgroundColor:'red',margin:20,padding:10,borderRadius:10,color:'white'}}>Manager Details</h1>
              
              <div style={{backgroundColor:'teal',margin:20,padding:10,borderRadius:10,color:'white'}}>
              <h1>Name:{this.props.name} </h1>
              <h1>Id:{this.props.id} </h1> 
              <h1>salary:{this.props.salary}</h1>
               <h1>EXP: {this.props.exp}</h1> 
               </div>  
                      
              </div>
           )   
       }
}

export  default Employee1