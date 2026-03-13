/*
npm install react-router-dom
BrowserRouter is used for doing client side routing with URL segments.When we are working with the router in react in the background it manages history API of HTML.I mean when we route through different pages that time we should maintain history so that component will be available for route back again. Basically it manages three different events:
---
1.Link: Is a router API which allows us accessing navigation throughout the application.

2.Route:It is used to render UI or component when any location matches.
------
3.Routes:A container for a nested tree of <Route> elements that renders the branch that best matches the current location.
*/

import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import UserFormHook from "../ControlledComponent/User Form/UserFromHook";
const RoutingDemo = () => {
  return (
    <div>
      <Router>
        <Header />
        <hr></hr>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<UserFormHook />}></Route>
          <Route path="/*" element={<Error />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

const Error = () => {
  return (
    <div>
      <h1 style={{ color: "red" }}>Error 404 , Page Not Found</h1>
    </div>
  );
};
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};
const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};
const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
};
const Login = () => {
  return (
    <div>
      <h1>Login</h1>
    </div>
  );
};

const Header = () => {
  return (
    <div>
     <ul>
       <li><a href="/">Home</a></li>
       <li><a href="/about">About</a> </li>
       <li><a href="/contact">Contact</a></li>
       <li><a href="/login">Login</a></li>
       <li> <a href="/register">register</a></li>
       </ul>
      </div>
  );
};
 
export default RoutingDemo;