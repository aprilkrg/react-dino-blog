import React, {Component} from 'react'
import PointDisplay from './PointDisplay'

class Moodpoints extends Component {
    // manage state to allow for user interactions
    // // === class field declaration for initial state  === //
    state = {
        points: 4
    }

    // // === constructor way of defining initial state: === //
    // constructor() {
    //     // invoke super FIRST
    //     super()
    //     // define a state object
    //     this.state = {
    //         points: 3,
    //         fruit: "mango"
    //     }
    //     // run code if needed
    //     console.log(this, 'value of this ^')
    // }
    // // === EVENT HANDLERS === //
    // create a method to set state
    handleIncreaseMood = () => {
        console.log("button click")
        // when passing a callback to setState, whatever is returned is merged with the state
        // give setState parameters for prev and current state values
        this.setState((previousState, currentState) => {
            return {
                points: previousState.points + 1
            }
        })
        // // === BAD !! WILL OFTEN ERROR !! BAD ===
        // this.state.points = this.state.points + 1
        console.log("points increased")
    }
    render() {
        return(
            <>
                <PointDisplay 
                    points={this.state.points}
                />
                {/* mood go up button */}
                <button 
                    onClick={this.handleIncreaseMood}
                >
                    🌈
                </button>
            </>
        )
    }
}

export default Moodpoints