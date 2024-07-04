import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const List = ({ names }) => {
    return <>
        <ul>
           {
             names.map(name=>{
                return <li>{name}</li>
             })
           }
        </ul>
    </>
}


const App = () => {
    const names = ["Subramanian", "Murugan", "Arun", "Karthik"]
    return <>
        <List names={names} />
    </>

}



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
