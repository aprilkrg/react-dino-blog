import "./App.css";
import Post from "./Post.jsx";
import React, { Component } from "react";

class App extends Component {
    // class field declaration > constreuctor
    state = {
        title: "Dinosaurs are awesome",
        author: "Stealthy Stegosaurus",
        body: "Check out this body property!!",
        comments: ["First!", "Great post", "Hire this author now!"]
    }

    // create a function that changes the body of state
    changeBody = () => {
        // smallest possible step: console log
        // console.log("click")
        // capturing the user input and save to variable
        const userInput = prompt("What should the current body be?")
    
        // console.log(userInput, 'input from user')
        this.setState({
            body: userInput
        })
    }
    render() {
        const post = {
            title: "Dinosaurs are awesome",
            author: "Stealthy Stegosaurus",
            body: "Check out this body property!",
            comments: ["First!", "Great post", "Hire this author now!"],
        };
        return (
            <div className="App">
                <Post
                    // pass the Post component the post object
                    post={post}
                    // pass the function as a prop
                    changeBody={this.changeBody}
                    // pass state to component
                    appState={this.state}
                />
            </div>
        );
    }
}

export default App;
