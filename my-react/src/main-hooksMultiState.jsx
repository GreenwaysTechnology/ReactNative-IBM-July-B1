import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

const Review = () => {
    const [like, setLike] = useState(0)
    const [dislike, setDislike] = useState(0)
    return <div>
        <h1>Review App</h1>
        <h3>Like {like} DisLike {dislike}</h3>
        <button onClick={() => setLike(like + 1)}>Like</button>
        <button onClick={() => setDislike(like + 1)}>DisLike</button>
    </div>
}

const App = () => {
    return <>
        <Review />
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);