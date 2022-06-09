import "./App.css";
import Post from "./Post.jsx";
import React, { Component } from "react";

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
    // class field declaration > constreuctor
    state = {
        title: "",
        author: "",
        body: "",
        comments: [],
        input: ""
    }
    // // === EVENT HANDLERS === //
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
        // const post = {
        //     title: "Dinosaurs are awesome",
        //     author: "Stealthy Stegosaurus",
        //     body: "Check out this body property!",
        //     comments: ["First!", "Great post", "Hire this author now!"],
        // };
        const postComponents = posts.map((post, index) => {
            return(
                <Post
                    post={post}
                    key={index}
                    changeBody={this.changeBody}
                />
            )
        })
        return (
            <div className="App">
                {postComponents}
                {/* <Post
                    // pass the Post component the post object
                    // post={post}
                    // pass the function as a prop
                    changeBody={this.changeBody}
                    // pass state to component
                    appState={this.state}
                /> */}
                <p>{this.state.input}</p>
                {/* make a controlled form */}
                <form
                    onSubmit={this.handleSubmit}
                >
                    <label htmlFor="post-title">Title:</label>
                    <input
                        type="text"
                        onChange={this.handleTextChange}
                        name="title"
                        id="post-title"
                        value={this.state.title}
                        />
                    <label htmlFor="post-author">Author:</label>
                    <input
                        type="text"
                        onChange={this.handleTextChange}
                        name="author"
                        id="post-author"
                        value={this.state.author}
                        />
                    <label htmlFor="post-body">Body:</label>
                    <input
                        type="text"
                        onChange={this.handleTextChange}
                        name="body"
                        id="post-body"
                        value={this.state.body}
                    />
                    <input
                        type="submit"
                    />
                </form>
            </div>
        );
    }
}

export default App;
