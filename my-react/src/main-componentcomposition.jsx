import ReactDOM from 'react-dom/client'

const ProfileHeading = () => <h1>Scientists / Computer</h1>

const Profile = () => {
    return <>
        <ProfileHeading />
        <h3>Alan Turing</h3>
        <h4>Born : 23 June 1912</h4>
        <h4>Died : 7 June 1954 (aged 41)
            Wilmslow, Cheshire, England
        </h4>
    </>
}

const Gallery = () => {
    return <div>
        <Profile />
    </div>
}

const App = () => {
    return <Gallery />
}


ReactDOM.createRoot(document.getElementById('root')).render(<App />)