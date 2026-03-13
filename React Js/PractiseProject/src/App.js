import logo from "./logo.svg";
import "./App.css";
// import Student from './Components/FunctionComponent/Student1.js';
// import Product from './Components/FunctionComponent/product.js';
// import Employee from './Components/ClassComponent/Employee.js'
// import Employee1 from "./Components/ClassComponent/Employee1";
// import { Employee2, Manager } from "./Components/ClassComponent/Employee2";
// import Constructor from "./Components/ClassComponent/Constructor";
// import HookDemo from "./Components/ReactHook/HookDemo";
// import HookDemo1 from "./Components/ReactHook/HookDemo1";
// import ControlledComponent from "./ControlledComponent/controlledComponent";
// import LifeCycleofClassComponent from "./Components/LifeCycleofClassComponent";
// import EventHandling from "./Components/EventHandling";
// import ControlledComponent1 from "./ControlledComponent/ControlledComponent1";
// import UserForm from "./ControlledComponent/User Form/UserForm";
// import UserForm1 from "./ControlledComponent/User Form/UserForm1.js";
// import UserFormHook from "./ControlledComponent/User Form/UserFromHook.js"
import RoutingDemo1 from "./Components/ROUTING/RoutingDemo1.js";
import FormObj from "./Components/ControlledComponent/User Form/FormObj.js";
import RoutingDemo2 from "./Components/ROUTING/RoutingDemo2.js";
import RoutingDemo3 from "./Components/ROUTING/RoutingDemo3.js";
import { JSXDemo } from "./Components/JSXDemo/JSXDemo.js";
import Neha from "./Components/HighOrderComponent/Neha.js";
import Rahul from "./Components/HighOrderComponent/Rahul.js"
import Parent from "./Components/ParentChild/Parent.js";
import Child from "./Components/ParentChild/Child.js";
import Parent1 from "./Components/ParentChild/Parent1.js";
// import BankHook from "./Components/REDUXDEMO/BankHook.js";
// import Bank from "./Components/REDUXDEMO/Bank.js";
// import store from "./Components/REDUXDEMO/Store.js";
 import { Provider } from "react-redux";
// import Bank from "./Components/REDUXDEMO2/Bank.js" 
// import { store } from "./Components/REDUXDEMO2/Store.js";

import Bank from './Components/REDUXDEMO2/Bank.js'
// import {store, persistor} from './Components/REDUXDEMO2/Store.js'
import { PersistGate } from 'redux-persist/integration/react'
// import { store, persistor } from "./Components/REDUXTOOLKIT/BankStore.js";
import Bank1 from "./Components/REDUXTOOLKIT/Bank1.js";
import User from "./Components/ReactReduxTask/User.js";
import { store,persistor } from "./Components/ReactReduxTask/Store.js";
 
/*
The <Provider> component makes the Redux store available to any nested components that need to access the Redux store.
*/

function App() {
      return (
<Provider store={store}>
<PersistGate loading={<h1>loading...</h1>} persistor={persistor}>
<div className="App">
  <User />
{/* <Bank1 /> */}
   {/* <BankHook /> */}
</div>
</PersistGate>
</Provider>
      );
}
 
export default App;





// function App() {
//       return (
// <Provider store={store}>
// <PersistGate loading={null} persistor={persistor}>
// <div className="App">
// <Bank />
//    {/* <BankHook /> */}
// </div>
// </PersistGate>
// </Provider>
//       );
// }
 
// export default App;



// function App() {
//   return (

//      <Provider store={store}>
//       <div className="App">
//         <Bank />
//         {/* <BankHook /> */}
//       </div>
//     </Provider>
//   );
// }

// export default App;

       {/* <Parent1 /> */}
     {/* <Parent/>    */}
        {/* <Rahul
        setCourse= "React FullStack"
        age={24} />
       <Neha 
        setCourse= "Mern FullStack"
        address= "Aroliya dewda"
         /> */}

       {/* <JSXDemo /> */}

{/* 
      <RoutingDemo3 /> */}

       {/* <FormObj/> */}

      {/* <UserFormHook /> */}

       {/* <UserForm1 /> */}
       
      {/* < ControlledComponent1 /> */}
       {/* < EventHandling /> */}
      {/* <LifeCycleofClassComponent /> */}
      {/* <ControlledComponent/> */}
      {/* <HookDemo1/ > */}

      {/* <HookDemo/> */}

      {/* <Constructor count1={20}/> */}

      {/* <Manager name="Manoj Sharma" id={232} salary={34567.34} exp={5} />

          
     <Employee2 name="Ankit Sharma"
      id={8984984}
      salary={50000}
      designation="React js Devloper" 
      />
       
        <Employee2 name="Ankit Sharma"
      id={8984984}
      salary={50000}
      designation="React js Devloper" 
      />
       <Employee2 name="Ankit Sharma"
      id={8984984}
      salary={50000}
      designation="React js Devloper" 
      /> */}

      {/* <div>
        <Student  
        name="Malkhan singh dewda"
        Rollno={12345}
        course= "Mernstack"
        fees= {1600}
        contact={6464728976}
        />

        
         
      </div> */}
      {/* <div style={{display:'flex',justifyContent:'space-evenly'}}>
      <Product imgurl="https://m.media-amazon.com/images/I/6192vQUNCQL._UX569_.jpg" 
      brand="LEE"
      category="TShirt"
      desc="Men Solid Mandarin Collar Cotton Blend Black T-Shirt"
      sp={2999.99}
      mrp={3299.99}
      discount={10}
      size="L,M,XL,XXL,XXXL"
      />
       <Product imgurl="https://m.media-amazon.com/images/I/6192vQUNCQL._UX569_.jpg" 
      brand="LEE"
      category="TShirt"
      desc="Men Solid Mandarin Collar Cotton Blend Black T-Shirt"
      sp={2999.99}
      mrp={3299.99}
      discount={10}
      size="L,M,XL,XXL,XXXL"
      />
       <Product imgurl="https://m.media-amazon.com/images/I/6192vQUNCQL._UX569_.jpg" 
      brand="LEE"
      category="TShirt"
      desc="Men Solid Mandarin Collar Cotton Blend Black T-Shirt"
      sp={2999.99}
      mrp={3299.99}
      discount={10}
      size="L,M,XL,XXL,XXXL"
      />
       <Product imgurl="https://m.media-amazon.com/images/I/6192vQUNCQL._UX569_.jpg" 
      brand="LEE"
      category="TShirt"
      desc="Men Solid Mandarin Collar Cotton Blend Black T-Shirt"
      sp={2999.99}
      mrp={3299.99}
      discount={10}
      size="L,M,XL,XXL,XXXL"
      />
      </div> */}
    
