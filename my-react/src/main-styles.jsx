import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'

const User = ({ imageSrc, id, userName, mail, status }) => <div>
    <img className="logo" src={imageSrc} alt='Your Image' />
    <h1 style={styles.heading}>{id}</h1>
    <p style={{color:'blue'}}>{userName}</p>
    <p>{mail}</p>
    <p>{status ? "Available" : "Not Available"}</p>
</div>
//styles object
const styles = {
    heading: {
        color: 'red',
        fontStyle: 'italic',
        fontFamily: 'Charcoal',
        border: 'thick solid #0000FF',
        borderRadius: '25px'
    }
}

//default Props
User.defaultProps = {
    userName: 'Your Name',
    id: 0,
    status: false,
    mail: 'something@yourdomain.com',
    imageSrc: 'https://i.imgur.com/7vQD0fPs.jpg'
}


const App = () => {
    const userName = 'Subramanian Murugan'
    const mail = 'sasubramanian_md@hotmail.com'
    const id = 1
    const imageSrc = 'https://i.imgur.com/7vQD0fPs.jpg'
    return <>
        <User userName={userName} id={id} mail={mail} status={true} imageSrc={imageSrc} />
        <hr />
        <User />
        <User id={2} userName={"Murugan"} />

    </>

}



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
