import React, { Component } from 'react'
import './Search.css'

class Search extends Component {

  render() {
    return(
      <div>
        <form onSubmit={(e) => this.props.onSearchSubmit(e)}>
          <input
            type="text"
            value={this.props.searchTerm}
            onChange={(e) => this.props.onSearchInput(e)}
            placeholder="enter movie to search for"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default Search
