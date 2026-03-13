import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default class UserForm1 extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      name: "",
      email: "",
      password: "",
      gender: "",
      city: "",
      address: "",
      dob: "",
      language: []
    }
  this.state=this.initialState

  }


  handleChange = (e) => {
    const { name, value, checked } = e.target;
  // console.log([name], value);

    this.setState({
      [name]: value
    })
     
    if(name==="language"){
       if(checked){
              this.setState({
                     language:[...this.state.language,value]
              })
       }else {
              this.setState({
                     language:this.state.language.filter(d=>d!==value)

                     })
              }
       }
    }
    handleSubmit=(e)=>{
       e.preventDefault()
       console.log(this.state)
       this.setState(this.initialState)
    }

  render() {
    return (
      <div>
        <h1 className="title">Student Registrtion Form</h1>
        <Form style={{ margin: 20 }} onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter a Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Enter a Email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Enter a Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              inline
              label="Male"
              name="gender"
              value="Male"
              onChange={this.handleChange}
              checked={this.state.gender === "Male"}
              type={"radio"}
              id={`inline-radio-1`}
            />

            <Form.Check
              inline
              label="Female"
              name="gender"
              value="Female"
              onChange={this.handleChange}
              checked={this.state.gender === "Female"}
              type={"radio"}
              id={`inline-radio-2`}
            />

            <Form.Check
              inline
              label="other"
              name="gender"
              value="other"
              onChange={this.handleChange}
              checked={this.state.gender === "other"}
              type={"radio"}
              id={`inline-radio-3`}
            />
          </Form.Group>

          <Form.Select
            className="mb-3"
            aria-label="Default select example"
            name="city"
            value={this.state.city}
            onChange={this.handleChange}
          >
            <option>Select a City</option>
            <optgroup label="Madhya Pardesh">
              <option value="indor">Indore</option>
              <option value="bhopal">Bhopal</option>
              <option value="Ujjain">Ujjain</option>
            </optgroup>
            <optgroup label="Maharastra" disabled>
              <option value="mumbai">Mumbai</option>
              <option value="pune">Pune</option>
              <option value="thane">thane</option>
            </optgroup>
          </Form.Select>

          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              placeholder="Enter a address"
              rows={5}
              name='address'
              value={this.state.address}
              onChange={this.handleChange}
              aria-label="with textarea"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="date"
              name="dob"
              value={this.state.dob}
              onChange={this.handleChange}
              max="2001-01-01"
              min="1990-01-01"
            />
          </Form.Group>

          <Form.Group>
            <Form.Check
              inline
              label="Hindi"
              name="language"
              value={"Hindi"}
              onChange={this.handleChange}
              type={"checkbox"}
              id={`inline-chekbox-1`}
            />

            <Form.Check
              inline
              label="English"
              name="language"
              value={"English"}
              onChange={this.handleChange}
              type={"checkbox"}
              id={`inline-chekbox-2`}
            />

            <Form.Check
              inline
              label="other"
              name="language"
              value={"other"}
              onChange={this.handleChange}
              type={"checkbox"}
              id={`inline-chekbox-3`}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}
