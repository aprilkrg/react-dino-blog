// new componenet => import react & react comoponent
import React, { Component } from 'react'
import Comment from './Comment'

class Post extends Component {
    render() {
        return (
            <>
                <h1>{this.props.post.title}</h1>
                <h3>{this.props.post.author}</h3>
                <p>{this.props.appState.body}</p>
                {this.props.post.comments.map((item,index) => (
                    <Comment key={index} message={item} />
                ))}
                <button 
                    onClick={this.props.changeBody}
                >
                    click
                </button>
            </>
        )
    }
}

// export the component
export default Post