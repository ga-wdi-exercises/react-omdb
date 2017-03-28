import React, { Component } from 'react'

class Search extends Component {

  render() {
    return(
      <div className = 'searchBox'>
      <form onSubmit={(event) => this.props.submitQuery(event)}>
        <input onChange={(event) => this.props.handleSearchInput(event)}
        value = {this.props.query}
        type = "text" placeholder= "Search a title" />
        <button type="submit">Search</button>
      </form>
      </div>
    )
  }
}

export default Search
