import React, {Component} from "react"

class Search extends Component {
  render(){
    return (
      <div className="searchBox">
        <form onSubmit={(evt) => this.props.handleSubmitQuery(evt)}>
          <input
          onChange={(evt) => this.props.handleSearchInput(evt)}
          value={this.props.query}
          type="text"
          placeholder="Search Movies.." />

          <button type="submit" className=".btn btn-primary" >Search</button>
        </form>
      </div>
    )
  }
}

export default Search
