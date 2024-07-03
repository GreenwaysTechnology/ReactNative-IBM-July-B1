import React from "react";
import ReactDOM from 'react-dom/client'

//CREATE DOM ELEMENT USING JSX
const Heading = <h1>Hello React!!</h1>// document.createElement('h1')

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(Heading)