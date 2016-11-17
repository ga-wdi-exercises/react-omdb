import React, { Component } from 'react'

class Results extends Component {
  render() {
    return (
      <div className="results">
        {this.props.results}
      </div>
    )
  }
}

export default Results
