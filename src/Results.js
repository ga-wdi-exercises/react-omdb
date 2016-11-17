import React, {Component} from 'react'

class Results extends Component {
  render() {
    let {query} = this.props
    return(
      <div className="resultsContainer">
        <p>{this.props.query}</p>
      </div>
    )
  }
}


export default Results
