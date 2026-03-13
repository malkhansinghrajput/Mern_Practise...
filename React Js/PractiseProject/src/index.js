import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

/*
createRoot lets us create a root to display React components inside a browser DOM node.
======
Babel is a JavaScript compiler that plays a crucial role in React development. It primarily transforms JSX syntax, along with modern JavaScript features, into code that can be understood by older browsers. Since browsers don't inherently understand JSX, Babel acts as a translator, ensuring compatibility across different environments.
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
