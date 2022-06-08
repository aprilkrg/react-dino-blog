import "./App.css";
import Post from "./Post.jsx";
import React, { Component } from "react";

class App extends Component {
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
                />
            </div>
        );
    }
}

export default App;
