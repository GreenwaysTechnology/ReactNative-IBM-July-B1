import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

const Review = () => {
    const [like, setLike] = useState(0)
    const [initialRender, setInitalRender] = useState(true);

    //Life cycle methods :componentDidMount
    useEffect(() => {
        if (initialRender) {
            setInitalRender(false)
        } else {
            console.log('update')
        }
    }, [like])

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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
