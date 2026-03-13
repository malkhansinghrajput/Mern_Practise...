/**
A higher-order component (HOC) is an advanced technique in React for reusing component logic. 
a higher-order component is a function that takes a component and returns a new component.
const EnhancedComponent = higherOrderComponent(WrappedComponent);*/

import React, { Component } from 'react'

const Skilled = (Student,hours) => {
class SkilledStudent extends Component {
  constructor(props){
    super(props)
    this.state={
      Course: this.props.setCourse,
      duration: 0,
      check: false
    }
  }

        onTrainingInProgress = () => {
            if (this.state.duration === 10) {
                this.setState({
                    check: true
                })
            } else {
                this.setState({
                    duration: this.state.duration + hours
                })
            }

        }
      
  render() {
    return (
      <Student 
       hocGrade="CERTIFIED"
       hocCourse={this.state.Course}
       hocDuration={this.state.duration}
      hocOnTrainingInProgress = {this.onTrainingInProgress}
      hocCheck={this.state.check}
      {...this.props}
      />
    )
  }
}
return SkilledStudent
}
export default Skilled