/*
npm install react-router-dom
BrowserRouter is used for doing client side routing with URL segments.When we are working with the router in react in the background it manages history API of HTML.I mean when we route through different pages that time we should maintain history so that component will be available for route back again. Basically it manages three different events:
---
1.Link: Is a router API which allows us accessing navigation throughout the application.

2.Route:It is used to render UI or component when any location matches.
------
3.Routes:A container for a nested tree of <Route> elements that renders the branch that best matches the current location.
useParams:
Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the routes
*/

import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
  NavLink,
  useLocation,
  useParams,
  useNavigate,
} from "react-router-dom";
import UserFormHook from "../ControlledComponent/User Form/UserFromHook";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../image/bana.jpg";

const RoutingDemo3 = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login isLoggedIn={true} />}></Route>
          <Route path="/register" element={<UserFormHook />}></Route>
          <Route path="/product/:category/:id" element={<Product />}></Route>
          <Route path="/*" element={<Error />}></Route>
        </Routes>
      </Router>
    </div>
  );
};
const Error = () => {
  return (
    <div>
      <h1 style={{ color: "red" }}>Error 404, Page Not Found</h1>
    </div>
  );
};
const Home = () => {
  return (
    <div>
      <h1 style={{ marginTop: 80 }}>Home</h1>
    </div>
  );
};
const Product = () => {
  const { category, id } = useParams();
  return (
    <div>
      <h1 style={{ marginTop: 80 }}>Product</h1>
      <h2>category:{category}</h2>
      <h2>Id:{id}</h2>
    </div>
  );
};
const About = () => {
  const navigate = useNavigate();
  const handleContact = () => {
    navigate("/contact", {
      state: { name: "Neha Sharma", age: 23, address: "Indore M.P" },
    });
  };
  return (
    <div>
      <h1 style={{ marginTop: 80 }}>About</h1>
      <Button onClick={handleContact}>Contact</Button>
    </div>
  );
};
const Contact = () => {
  let location = useLocation();
  const { name = "NA", age = 0, address = "NA" } = location.state || {};
  return (
    <div>
      <h1 style={{ marginTop: 80 }}>Contact</h1>
      <h2>Name is:{name} </h2>
      <h2>Age is:{age} </h2>
      <h2>Address is:{address} </h2>
    </div>
  );
  // return (
  //  <div>
  //  <h1 style={{ marginTop: 80 }}>Contact</h1>
  //  <h2>Name is:{location.state?.name}</h2>
  //  <h2>Age is:{location.state?.age}</h2>
  //  <h2>Address is:{location.state?.address}</h2>
  //  </div>
  // )
};
const Login = ({ isLoggedIn}) => {
  const navigate = useNavigate()
  const handleRegister= () => {
    navigate("/register")
  }
  const handleLogin= () => {
    if(isLoggedIn){
      navigate("/")
    }
  }
  return (
    <div>
      <h1 style={{ marginTop: 80 }}>Login</h1>
      <Button onClick={handleRegister}>Register</Button>
      <Button onClick={handleLogin} style={{margin:10}}>Login</Button>
    </div>
  );
};

const headerStyle = {
  zIndex: 1,
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  boxShadow: "0 2px 4px 0  rgba(0,0,0,0.1)",
  height: 60,
};

const inActiveStyle = {
  color: "grey",
  textDecoration: "none",
  fontWeight: "normal",
};
const activeStyle = {
  color: "brown",
  textDecoration: "underline",
  fontWeight: "bold",
};

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" style={headerStyle}>
        <Container style={{ backgroundColor: "white" }}>
          <Navbar.Brand href="#">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-center"
              style={{ borderRadius: "50%" }}
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                to="/"
                style={({ isActive }) =>
                  isActive ? activeStyle : inActiveStyle
                }
              >
                Home
              </NavLink>
              &nbsp;&nbsp;
              <NavLink
                to="/about"
                style={({ isActive }) =>
                  isActive ? activeStyle : inActiveStyle
                }
              >
                About
              </NavLink>
              &nbsp;&nbsp;
              <NavLink
                to="/contact"
                style={({ isActive }) =>
                  isActive ? activeStyle : inActiveStyle
                }
              >
                Contact
              </NavLink>
              &nbsp;&nbsp;
              <NavLink
                to="/login"
                style={({ isActive }) =>
                  isActive ? activeStyle : inActiveStyle
                }
              >
                Login
              </NavLink>
              &nbsp;&nbsp;
              <NavLink
                to="/register"
                style={({ isActive }) =>
                  isActive ? activeStyle : inActiveStyle
                }
              >
                Register
              </NavLink>
              &nbsp;&nbsp;
              <NavLink
                to="/product/mobile/121"
                style={({ isActive }) =>
                  isActive ? activeStyle : inActiveStyle
                }
              >
                Product
              </NavLink>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
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
  );
};
export default RoutingDemo3;
