import "./App.css";
import React, { Component } from "react";
import Post from "./components/Post";
import DinoForm from "./components/DinoForm";

// imitation data from db
const posts = [
    {
      title: 'Dinosaurs are awesome',
      author: 'Stealthy Stegosaurus',
      body: 'Check out this body property!',
      comments: [
        'First!',
        'Second!',
        'Third!'
      ]
    }, 
    {
      title: 'Dinosaurs are neat',
      author: 'Mr. T-Rex',
      body: 'I pity the fool that doesn\'t think dinosaurs are neat!',
      comments: [
        'Wow!',
        'Amazing!',
        '🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥'
      ]
    }
  ]

class App extends Component {
    // class field declaration 
    state = {
        title: "",
        author: "",
        body: "",
        comments: [],
        input: ""
    }
    // // === EVENT HANDLERS === //
    // handle form submission
    handleSubmit = (e) => {
        e.preventDefault()
        console.log("submit form")
        // push into our copy of state
        posts.push(this.state)
        // clear form
        this.setState({
            title: "",
            author: "",
            body: "",
            comments: [],
            input: ""
        })
    }
    // handle text change in form
    handleTextChange = (e) => {
        console.log("handle text change")
        // console.log(e.target.value, e.target.name)
        const updatedInput = { [e.target.name]: e.target.value }
        console.log(updatedInput)
        this.setState(updatedInput)
    }
    render() {
        const postComponents = posts.map((post, index) => {
            return(
                <Post
                    post={post}
                    key={`post-${index}`}
                />
            )
        })
        return (
            <div className="App">
                <h1>Dino Blog</h1>
                <p>Create A New Dinosaur!</p>
                <div>{this.state.input}</div>
                <DinoForm 
                    handleSubmit={this.handleSubmit}
                    handleTextChange={this.handleTextChange}
                    state={this.state}
                />
                {postComponents.reverse()}

            </div>
        );
    }
}

export default App;
