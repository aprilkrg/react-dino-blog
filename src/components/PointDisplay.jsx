import React, {Component} from 'react'

class PointDisplay extends Component {
    render() {
        return(
            <>
                <h3>On a scale of 1-10, you are this happy!</h3>
                <h4>{this.props.points}</h4>
            </>
        )
    }
}

export default PointDisplay