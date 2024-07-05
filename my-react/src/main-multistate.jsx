import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

class Review extends React.Component {

    state = {
        like: 0,
        dislike: 0
    }
    //Event Listener
    onIncrement = () => {
        this.setState((prevState) => {
            return { ...prevState, like: prevState.like + 1 }
        })
    }

    render() {
        const { like, dislike } = this.state
        return <div>
            <h1>Like {like} Dislike {dislike}</h1>
            <button onClick={this.onIncrement}>Like</button>
            <button onClick={() => {
                this.setState((prevState) => {
                    return { ...prevState, dislike: prevState.dislike + 1 }
                })
            }}>Dislike</button>

        </div>
    }
}



const App = () => {
    return <>
        <Review />
    </>

}



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
