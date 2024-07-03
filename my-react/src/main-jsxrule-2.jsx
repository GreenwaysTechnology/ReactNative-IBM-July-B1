import ReactDOM from 'react-dom/client'

const Welcome = () => {

    return <div>
        <h1>Welcome to IBM</h1>
        <p>Hello</p>
    </div>

}


ReactDOM.createRoot(document.getElementById('root')).render(<Welcome />)