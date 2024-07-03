import ReactDOM from 'react-dom/client'

function Heading() {
    return <h1>
        Hello React!
    </h1>
}

// ReactDOM.createRoot(document.getElementById('root')).render(Heading())
ReactDOM.createRoot(document.getElementById('root')).render(<Heading></Heading>)