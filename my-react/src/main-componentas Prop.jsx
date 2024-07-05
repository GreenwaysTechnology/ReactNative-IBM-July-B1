import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const Page = ({ children }) => {
    return <>
        {children}
    </>
}
const Header = ({ title }) => {
    return <h1>{title}</h1>
}
const Footer = () => {
    return <h1>Footer</h1>
}
const Layout = (props) => {
    return <div>
        {props.children}
    </div>
}
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
    const imageSrc = 'https://i.imgur.com/7vQD0fPs.jpg'

    return <>
        <Layout>
            {/* Passing Header as prop */}
            <Header title="User Information system">
                 
            </Header>
            {/* Passing Page as prop */}
            <Page>
                <User userName={"Ram"} id={2} mail={"ram@gmail.com"} status={true} imageSrc={imageSrc} />
            </Page>
            {/* Passing Footer as prop */}
            <Footer />
        </Layout >
    </>

}



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
