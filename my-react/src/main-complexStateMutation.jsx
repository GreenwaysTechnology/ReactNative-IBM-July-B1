import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

class HouseRating extends React.Component {

    state = {
        house: {
            name: 'RavenClaw',
            points: 10
        }        
    }
    onIncreasePointsByTwo = () => {
        this.setState((prevState)=>{

            return {
                ...prevState, //level-0 copy //copy all properties inside state
                house: {
                    ...prevState.house, // level-1 copy:copy all properties inside house
                     points: prevState.house.points+ 2
                }
            }

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
