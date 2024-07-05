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
    onIncreasePointsByTwo = () => {
        this.setState((prevState) => {
            return produce(prevState, (draft) => {
                draft.house.points += 2
            })

        })
    }
    render() {
        return <div>
            <h1>House Rating Component</h1>
            <h3>House Name : {this.state.house.name}</h3>
            <h3>Points : {this.state.house.points}</h3>
            <button onClick={this.onIncreasePointsByTwo}>Rate</button>
        </div>
    }
}


const App = () => {
    return <>
        <HouseRating />
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
