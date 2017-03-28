import React, { Component } from 'react'

class Search extends Component {
  render() {
    return(
      <form onSubmit={(e) => {this.props.submitQuery(e)}}>
      <input type="text" placeholder="Search for a movie title..." onChange={(e) => {this.props.searchInput(e)}} value={this.props.query} />
      <button type="submit">Search</button>
      </form>
    )
  }
}

export default Search
