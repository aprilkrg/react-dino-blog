import React, { Component } from 'react'
import Comment from './Comment'

class Post extends Component {
    render() {
        return (
            <>
                <h2>{this.props.post.title}</h2>
                <h3>{this.props.post.author}</h3>
                <p>{this.props.post.body}</p>
                <ul>
                    {this.props.post.comments.map((item, index) => (
                        <Comment
                            key={`comment-${index}`}
                            message={item}
                        />
                    ))}
                </ul>
            </>
        )
    }
}

// export the component
export default Post