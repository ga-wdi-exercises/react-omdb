import React, {Component} from "react"

class Search extends Component {
  // constructor(props)
  render(){
    return (
      <div className="searchBox">
      <form onSubmit={(e)} => this.props.handleSubmitQuery{(e)}>
        <input
          onChange={(e)} => this.props.handleSerachInput{(e)}
          value={this.props.query}
          type = "text"
          placeholder="Enter a Movie Title..." />
          <button type= "submit">Search</button>
        </form>
      </div>
    )
  }

export default Search
