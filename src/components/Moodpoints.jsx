import React, {Component} from 'react'
import PointDisplay from './PointDisplay'

class Moodpoints extends Component {
    // manage state to allow for user interactions
    // // === CLASS FIELD DECLARATION for initial state  === //
    state = {
        points: 4
    }

    // // === CONSTRUCTOR way of defining initial state: === //
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
    //     // manually bind this when we don't use arrow functions
    //     this.handleIncreaseMood = this.handleIncreaseMood.bind(this)
    // }

    // // === EVENT HANDLERS === //
    // create a method to set state
    handleIncreaseMood = () => {
        // // === BAD !! WILL OFTEN ERROR !! BAD ===
        // this.state.points = this.state.points + 1
        // console.log("button click")
        // give setState parameters for prev and current state values
        this.setState((previousState, currentState) => {
            // when passing a callback to setState, whatever is returned is merged with the state
            return {
                points: previousState.points + 1
            }
        })
        // console.log("points increased")
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