import React, { Component } from "react";

export default class ControlledComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: 0,
    };
  }
  handleChangeName = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({
      name: value.toUpperCase(),
    });
    // console.log(e.target)
  };

  handleChangeAge = (e) => {
    const { age, value } = e.target;
    console.log(age, value);
    this.setState({
      age: value.substr(0, 2),
    });
  };
  render() {
    return (
      <div>
        <h1 className="title">controlledComponent</h1>
        <input
          type="text"
          placeholder="Enter a Name"
          name="name"
          style={{ fontSize: 28, fontWeight: "bold" }}
          value={this.state.name}
          onChange={this.handleChangeName}
        />
        <br></br>
        <br></br>

        <input
          type="text"
          placeholder="Enter a Age"
          age="number"
          style={{ fontSize: 28, fontWeight: "bold" }}
          value={this.state.age}
          onChange={this.handleChangeAge}
        />
      </div>
    );
  }
}
