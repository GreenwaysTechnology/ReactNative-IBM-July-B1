import React from "react";
import ReactDOM from 'react-dom/client'

//Variable Pattern
//Heading is just variable
//<h1>Hello React!!</h1> is Component
const Heading = <h1>Hello React!!</h1>// document.createElement('h1')

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(Heading)