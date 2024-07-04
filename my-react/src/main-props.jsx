import React from 'react'
import ReactDOM from 'react-dom/client'

//props is just variable holding all parameters
//props value is just object
const User = (props) => {
    console.log(props)
    return <div>
        <img src={props.imageSrc} alt='Your Image' />
        <h1>{props.id}</h1>
        <p>{props.userName}</p>
        <p>{props.mail}</p>
        <p>{props.status ? "Available" : "Not Available"}</p>
    </div>
}

const App = () => {
    const userName = 'Subramanian Murugan'
    const mail = 'sasubramanian_md@hotmail.com'
    const id = 1
    const imageSrc = 'https://i.imgur.com/7vQD0fPs.jpg'
    // userName,id,mail are parameters
    return <>
        <User userName={userName} id={id} mail={mail} status={true} imageSrc={imageSrc} />
        <User userName={"Ram"} id={2} mail={"ram@gmail.com"} status={true} imageSrc={imageSrc} />
        <User userName={"Ram"} id={3} mail={"ram@gmail.com"} status={true} imageSrc={imageSrc} />
        <User userName={"Ram"} id={4} mail={"ram@gmail.com"} status={true} imageSrc={imageSrc} />
        <User userName={"Ram"} id={5} mail={"ram@gmail.com"} status={true} imageSrc={imageSrc} />
        <User userName={"Ram"} id={6} mail={"ram@gmail.com"} status={true} imageSrc={imageSrc} />
    </>

}



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
