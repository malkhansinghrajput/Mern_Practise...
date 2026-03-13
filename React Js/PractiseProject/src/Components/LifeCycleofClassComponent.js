/*
Mounting:Component is rendered for the first time.
1.constructor(props)
2.static getDerivedStateFromProps(props,state)return null or object
3.render()
4.componentDidMount():
It is called only once in a life cycle of class component and it is used for calling side effects(api calling)
=============
2.Updating:Component is re-rendered by making changes in props or state.
1.static getDerivedStateFromProps(props,state)return null or object
2.shouldComponentUpdate() return true
============
3.UnMounting:Component is removed from the DOM.
*/

import React, { Component } from 'react'

export default class LifeCycleofClassComponent extends Component {
       constructor(props){
              super(props)
              this.state={
                     product:1299.99,
                     show:true
              }
              console.log('calling constructor')
       }
    
       static getDrivedStateFromProps(props,state) {
              console.log('calling getDrivedStateFromprops');
              return null
       }
       componentDidMount() {
              console.log('calling componentDidMount')
              setTimeout(()=>{
                     this.setState({
                            ptoduct:this.state.product+100
                     })
              },2000)
       }

// Called to determine whether the changein props and state should trigger a re render

shouldComponentUpdate(){
       console.log("calliing shouldComponentUpdate");
       return true
}

getSnapshotBeforeUpdate(preProps,prevState) {
       console.log("calling getSnapshotBeforeUpdate")
       document.getElementById('before').innerHTML='Product price Before Update is :'+prevState.product
       return null
}

   componentDidUpdate() {
       console.log("Calling componentDidUpdate")
       document.getElementById('after').innerHTML='product Price After Update:'+this.state.product
   }


       handleupdate=()=>{
            this.setState({
                     product:this.state.product+100
              })
       }
       handleDelete=()=>{
              this.setState({
                     show:false
              })
       }
  render() {
       console.log('Calling Render')
    return (
      <div>
       <h1 className='title'>LifeCycleofClassComponent</h1>
       <h1>Product : &#8377;{this.state.product}</h1>
       <button onClick={this.handleupdate}>Update</button>
              <h1 id='before'></h1>
              <h1 id='after'></h1>
              { this.state.show ? <Cart/>: <h1>Component has been Removed</h1> }
              <button onClick={this.handleDelete}>Delete Cart</button>

      </div>
    )
  }
}

 class Cart extends Component {
          componentWillUnmount(){
        console.log("calling componentWillUnmount")
          }
  render() {
    return (
      <div>
       <h1 className='title'>Cart</h1>
      </div>
    )
  }
}

