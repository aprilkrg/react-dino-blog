import React, { Component } from "react";
import Moodpoints from "./components/Moodpoints";

class App extends Component {
    // react v16 allows for a simple state obj without a constructor
    // set state object and give it the same data as `post`
    state = {

    }

    render() {
        return (
            <div className="App">
                <h1>Moodpoints</h1>
                <Moodpoints/>
            </div>
        );
    }
}

export default App
