// new componenet => import react & react comoponent
import React, { Component } from 'react'
import Comment from './Comment'

class Post extends Component {
    render() {
        console.log(this.state, this.props, 'STATEEEE')
        return (
            <>
                {/* <h1>PROPS:{this.props.post.title}</h1>
                <h3>{this.props.post.author}</h3>
                <p>{this.props.post.body}</p>
                {this.props.post.comments.map(item => (
                    <Comment message={item} />
                ))} */}

                <h1>STATE:{this.props.dinoState.title}</h1>
                <h3>{this.props.dinoState.author}</h3>
                <p>{this.props.dinoState.body}</p>
                {this.props.dinoState.comments.map(item => (
                    <Comment message={item} />
                ))}
                <button onClick={this.props.changeBody}>edit body</button>

            </>
        )
    }
}

// export the component
export default Post