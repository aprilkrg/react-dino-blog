// new componenet => import react & react comoponent
import React, { Component } from 'react'
import Comment from './Comment'

class Post extends Component {
    render() {
        return (
            <>
                <h1>{this.props.post.title}</h1>
                <h3>{this.props.post.author}</h3>
                <p>{this.props.post.body}</p>
                {this.props.post.comments.map(item => (
                    <Comment message={item} />
                ))}
            </>
        )
    }
}

// export the component
export default Post