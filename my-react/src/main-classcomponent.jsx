import ReactDOM from 'react-dom/client'
import React  from 'react'

class Heading extends React.Component {

    //override render method from React.Component
    render(){
        return <h1>
            Hello React!!!
        </h1>
    }

}


ReactDOM.createRoot(document.getElementById('root')).render(<Heading></Heading>)