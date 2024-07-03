import ReactDOM from 'react-dom/client'
// import React, { Fragment } from 'react'

// const Welcome = () => {
//     return <React.Fragment>
//         <h1>Welcome to IBM</h1>
//         <p>Hello</p>
//     </React.Fragment>

// }


// const Welcome = () => {
//     return <Fragment>
//         <h1>Welcome to IBM</h1>
//         <p>Hello</p>
//     </Fragment>

// }
const Welcome = () => {
    return <>
        <h1>Welcome to IBM</h1>
        <p>Hello</p>
    </>

}


ReactDOM.createRoot(document.getElementById('root')).render(<Welcome />)