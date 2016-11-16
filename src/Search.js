import React, { Component } from 'react'

class Search extends Component {
  render() {
    let {handleSearchInput, handleSubmitQuery, query} = this.props
    return(
      <div className="searchBox">
        <form onSubmit={e => this.props.onSearchSubmit(e)}>
          <input onChange={(e) => this.props.onSearchInput(e)} value={this.props.query} type="text" placeholder="Enter a Movie Title..." />
          <button type="submit">Search</button>
          </form>
      </div>
    )
  }
}


export default Search
