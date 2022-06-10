import React, { Component } from 'react'

class Comment extends Component {
    render() {
        return (
            <>
                <li
                    style={{listStyleType: "none"}}
                >{this.props.message}</li>
            </>
        )
    }
}

export default Comment