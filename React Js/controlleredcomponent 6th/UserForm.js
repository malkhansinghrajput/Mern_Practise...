import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default class UserForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            password: "",
            gender: "Male",
            city: "",
            address: "",
            dob: "",
            language: []
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        console.log([name], value)
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <h1 className='title'>STUDENT REGISTRATION</h1>
                <Form style={{margin:20}}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Enter a Name"
                            name='name'
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="email" placeholder="Enter a Email"
                            name='email'
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password"
                            name='password'
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
                            label="Other"
                            name="gender"
                            value="Other"
                            onChange={this.handleChange}
                            checked={this.state.gender === "Other"}
                            type={"radio"}
                            id={`inline-radio-3`}
                        />
                    </Form.Group>
                    <Form.Select
                    className="mb-3"
                        aria-label="Default select example"
                        name='city'
                        value={this.state.city}
                        onChange={this.onChange}
                    >
                        <option>Select a City</option>
                        <optgroup label='Madhya Pardesh'>
                            <option value="indore">Indore</option>
                            <option value="ujjain">Ujjain</option>
                            <option value="bhopal" disabled>Bhopal</option>
                        </optgroup>
                        <optgroup label='Maharastra' disabled>
                            <option value="mumbai">Mumbai</option>
                            <option value="pune">Pune</option>
                            <option value="thane">Thane</option>
                        </optgroup>
                    </Form.Select>
                    <Form.Group className="mb-3">
                        <Form.Control 
                        as="textarea" 
                        placeholder='Enter a Address'
                        rows={5}
                        name='address'
                        value={this.state.address}
                        onChange={this.onChange}
                        aria-label="With textarea" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="date" 
                            name='dob'
                            value={this.state.dob}
                            onChange={this.handleChange}
                            max="2001-01-01"
                            min="1990-01-02" 
                        />
                    </Form.Group>
                     <Form.Group className="mb-3">
                        <Form.Check
                            inline
                            label="Hindi"
                            name="language"
                            value={"Hindi"}
                            onChange={this.handleChange}
                            type={"checkbox"}
                            id={`inline-checkbox-1`}
                        />
                        <Form.Check
                            inline
                            label="English"
                            name="language"
                            value={"English"}
                            onChange={this.handleChange}
                            type={"checkbox"}
                            id={`inline-checkbox-2`}
                        />
                        <Form.Check
                            inline
                            label="Other"
                            name="language"
                            value={"Other"}
                            onChange={this.handleChange}
                            type={"checkbox"}
                            id={`inline-checkbox-3`}
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
