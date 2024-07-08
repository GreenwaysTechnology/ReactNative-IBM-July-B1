import ReactDOM from 'react-dom/client'
import './index.css'
import { useEffect, useState } from 'react'
import { produce } from 'immer'

const Review = () => {
    //state declaration
    const [like, setLike] = useState(0)

    //componentDidMount
    useEffect(() => {
        //async logic
        setTimeout(() => {
            setLike(like + 1)
        }, 5000)
    }, [])

    return <div>
        <h1>Like {like}</h1>
        <button onClick={() => {
            setLike(like + 1)
        }}>+</button>
    </div>
}


const App = () => {
    return <>
        <Review />
    </>
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
