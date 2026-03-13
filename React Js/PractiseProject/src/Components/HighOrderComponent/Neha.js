/**
 A higher-order component (HOC) is an advanced technique in React for reusing component logic. 
a higher-order component is a function that takes a component and returns a new component.
const EnhancedComponent = higherOrderComponent(WrappedComponent);
 */

import React, { Component } from "react";
import Skilled from "./Skilled"
class Neha extends Component {
  render() {
    return (
      <div>
        <h1>Neha Details</h1>
        <h1>Course:{this.props.hocCourse}</h1>
        <h1>Adress:{this.props.address}</h1>
        <h1>Duration:{this.props.hocDuration}</h1>
        {this.props.hocCheck ? (
          <h1 style={{ backgroundColor: "green", color: "white" }}>
            {this.props.hocGrade}
          </h1>
        ) : (
          <button onClick={this.props.hocOnTrainingInProgress}>
            update Duration
          </button>
        )}
      </div>
    );
  }
}
export default Skilled(Neha, 2);
