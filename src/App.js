import "./App.css";
import Post from "./Post.jsx";
import React, { Component } from "react";

class App extends Component {
    // react v16 allows for a simple state obj without a constructor
    // set state object and give it the same data as `post`
    state = {
        title: "Dinosaurs are awesome",
        author: "Stealthy Stegosaurus",
        body: "Check out this body property!",
        comments: ["First!", "Great post", "Hire this author now!"]
    }
    // create a function that will change the body of state
    changeBody = () => {
        console.log("click")
        const userInput = prompt("What should the current body be?")
        console.log(userInput, 'user input')
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
                    // pass the Post component the post object, state object, and changeBody method
                    post={post} 
                    name="April" 
                    dinoState={this.state} 
                    changeBody={this.changeBody}
                />
            </div>
        );
    }
}

export default App;
