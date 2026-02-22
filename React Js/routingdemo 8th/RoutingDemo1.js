
/*
npm install react-router-dom
BrowserRouter is used for doing client side routing with URL segments.When we are working with the router in react in the background it manages history API of HTML.I mean when we route through different pages that time we should maintain history so that component will be available for route back again. Basically it manages three different events:
---
1.Link: Is a router API which allows us accessing navigation throughout the application.

2.Route:It is used to render UI or component when any location matches.
------
3.Routes:A container for a nested tree of <Route> elements that renders the branch that best matches the current location.
*/

import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import UserFormHook from '../controlleredcomponent/UserFormHook'
import logo from '../../images/img_avatar1.png'

const RoutingDemo1 = () => {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/contact' element={<Contact />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/register' element={<UserFormHook />}></Route>
                    <Route path='/*' element={<Error />}></Route>
                </Routes>
            </Router>
        </div>
    )
}
const Error = () => {
    return (
        <div>
            <h1 style={{ color: 'red' }}>Error 404, Page Not Found</h1>
        </div>
    )
}
const Home = () => {
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}
const About = () => {
    return (
        <div>
            <h1>About</h1>
        </div>
    )
}

const Contact = () => {
    return (
        <div>
            <h1>Contact</h1>
        </div>
    )
}
const Login = () => {
    return (
        <div>
            <h1>Login</h1>
        </div>
    )
}


const Header = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#">
                        <img
                            src={logo}
                            width="50"
                            height="50"
                            className="d-inline-block align-center"
                            style={{borderRadius:'50%'}}
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" >

                            <Link to="/"
                                style={{ textDecoration: 'none' }}>Home</Link>&nbsp;&nbsp;
                            <Link to="/about"
                                style={{ textDecoration: 'none' }}
                            >About</Link>&nbsp;&nbsp;

                            <Link to="/contact"
                                style={{ textDecoration: 'none' }}
                            >Contact</Link>&nbsp;&nbsp;

                            <Link to="/login"
                                style={{ textDecoration: 'none' }}
                            >Login</Link>&nbsp;&nbsp;

                            <Link to="/register"
                                style={{ textDecoration: 'none' }}
                            >Register</Link>&nbsp;&nbsp;

                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default RoutingDemo1


