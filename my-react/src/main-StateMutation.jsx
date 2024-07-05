import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

class Like extends React.Component {

    state = {
        value: 0
    }
    //Event Listener
    onIncrement = () => {
        //through pure function only we can mutate the state
        //prevState is just variable holding "State Object"
        this.setState((prevState) => {
            //return immutable object
            // return {
            //     value: prevState.value+1
            // }
            // return Object.assign({}, prevState, { value: prevState.value + 1 })
            return { ...prevState, value: prevState.value + 1 }
        })
    }

    render() {
        console.log(this.state)
        const { value } = this.state
        return <div>
            {/* <h1>Like {this.state.value}</h1> */}
            <h1>Like {value}</h1>
            <button onClick={this.onIncrement}>Like</button>
        </div>
    }
}



const App = () => {
    return <>
        <Like />
    </>

}



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
