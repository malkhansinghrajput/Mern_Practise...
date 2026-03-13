import React, { Component } from 'react'

export default class Constructor extends Component {
       constructor(props){
            super(props)
                     this.state={
                            Count:this.props.count1
                     }
              
                     
       }     
  render() {
    return (
      <div>
       <h1>Constructor demo</h1>
       <h1>Count : {this.state.Count} </h1>
      </div>
    )
  }
}
