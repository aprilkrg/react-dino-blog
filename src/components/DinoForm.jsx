import React, { Component } from 'react'

class DinoForm extends Component {
    render() {
        return (
            <>
                <form
                    onSubmit={this.props.handleSubmit}
                >
                    <label htmlFor="post-title">Title:</label>
                    <input
                        type="text"
                        onChange={this.props.handleTextChange}
                        name="title"
                        id="post-title"
                        value={this.props.state.title}
                    />
                    <label htmlFor="post-author">Author:</label>
                    <input
                        type="text"
                        onChange={this.props.handleTextChange}
                        name="author"
                        id="post-author"
                        value={this.props.state.author}
                    />
                    <label htmlFor="post-body">Body:</label>
                    <input
                        type="text"
                        onChange={this.props.handleTextChange}
                        name="body"
                        id="post-body"
                        value={this.props.state.body}
                    />
                    <input
                        type="submit"
                    />
                </form>
            </>
        )
    }
}

export default DinoForm