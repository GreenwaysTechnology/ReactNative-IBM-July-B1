import ReactDOM from 'react-dom/client';
import './index.css'
import { useState } from 'react';

//hook based component

const Counter = (props) => {

    //state declaration.
    const [counter, setCounter] = useState(0)

    const onIncrement = () => {
        //calling setCounter
        // setCounter((prevState) => {
        //     return prevState + 1
        // })
        setCounter(counter + 1)
    }
    return <div>
        <h1>Counter {counter}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={() => {
            setCounter(counter - 1)
        }}>-</button>

    </div>
}



const App = () => {
    return <>
        <Counter />
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
