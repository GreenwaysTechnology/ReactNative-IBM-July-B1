import React from 'react'
import ReactDOM from 'react-dom/client'

const User = ()=>{
    const userName = 'Subramanian Murugan'
    const mail = 'sasubramanian_md@hotmail.com'
    const status = true
    const id = 1
    const imageSrc='https://i.imgur.com/7vQD0fPs.jpg'

    return <div>
            <img src={imageSrc} alt='Your Image' />
            <h1>{id}</h1>
            <p>{userName}</p>
            <p>{mail}</p>
            <p>{status ? "Available" : "Not Available"}</p>
    </div>
}

const App = ()=> {
    return <User/>
}



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
