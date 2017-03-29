import React, { Component } from 'react'


class Search extends Component {


  render() {
    let {handleSearchInput, handleSubmitQuery, query} = this.props
    return (
      <div className="searchBox">
      <form onSubmit={(e) => handleSubmitQuery(e)}>
        <input onChange={(e) => handleSearchInput(e)} value={query} type="text" placeholder="Enter Movie Title Here..." />
        <button type="submit"> Search </button>
      </form>
      </div>
    )
  }



}

export default Search;
