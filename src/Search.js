import React, { Component } from 'react'

class Search extends Component {

  render() {
    let {handleSearchInput, handleSubmitQuery, query} = this.props
    return(
      <div className = 'searchBox'>
      <form onSubmit={(event) => handleSubmitQuery(event)}>
        <input onChange={(event) => handleSearchInput(event)}
        value = {query}
        type = "text"
        placeholder= "Search a title" />
        <button type="submit">Search</button>
      </form>
      </div>
    )
  }
}

export default Search
