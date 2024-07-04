import React from 'react'
import ReactDOM from 'react-dom/client'

// const User = (props) => {
//     const { imageSrc, id, userName, mail, status } = props
//     return <div>
//         <img src={imageSrc} alt='Your Image' />
//         <h1>{id}</h1>
//         <p>{userName}</p>
//         <p>{mail}</p>
//         <p>{status ? "Available" : "Not Available"}</p>
//     </div>
// }
const User = ({ imageSrc, id, userName, mail, status }) => <div>
    <img src={imageSrc} alt='Your Image' />
    <h1>{id}</h1>
    <p>{userName}</p>
    <p>{mail}</p>
    <p>{status ? "Available" : "Not Available"}</p>
</div>


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
