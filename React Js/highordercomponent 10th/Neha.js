import React, { Component } from "react";
import Skilled from "./Skilled";
class Neha extends Component {
  render() {
    return (
      <div>
        <h1>Neha's Details</h1>
        <h1>Course:{this.props.hocCourse}</h1>
        <h1>Age:{this.props.age}</h1>
        <h1>Duration:{this.props.hocDuration}</h1>
        {this.props.hocCheck ? (
          <h1 style={{ backgroundColor: "green", color: "white" }}>
            {this.props.hocGrade}
          </h1>
        ) : (
          <button onClick={this.props.hocOnTrainingInProgress}>
            Update Duration
          </button>
        )}
      </div>
    );
  }
}
export default Skilled(Neha, 5);
