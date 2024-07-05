import React from 'react';
import ReactDOM from 'react-dom/client';
import { produce } from 'immer';
import './index.css'

class HouseRating extends React.Component {

    state = {
        house: {
            name: 'RavenClaw',
            points: 10
        }
    }
    constructor() {
        super()
        console.log('constructor is called')
    }
    onIncreasePointsByTwo = () => {
        this.setState((prevState) => {
            return produce(prevState, (draft) => {
                draft.house.points += 2
            })

        })
    }
    render() {
        console.log('render is called')
        return <>
            {/* here state as prop(dynamic prop) and function as prop */}
            <HouseRatingDashBoard {...this.state} onIncrement={this.onIncreasePointsByTwo} />
        </>
    }
    componentDidMount(){
        console.log('componentDidMount is called')
    }

    componentDidUpdate(){
        console.log('componentDidUpdate is called')
    }
}

const HouseRatingDashBoard = props => {
    console.log
    return <div>
        <h1>House Rating Component</h1>
        <h3>House Name : {props.house.name}</h3>
        <h3>Points : {props.house.points}</h3>
        <button onClick={props.onIncrement}>Rate</button>
    </div>
}


const App = () => {
    return <>
        <HouseRating />
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
