import React, { Component } from 'react'


class Search extends Component {
  render() {
    return (
      <div className="searchBox">
      <form>
        <input type="text" placeholder="Enter Movie Title Here..." />
        <button type="submit"> Search </button>
      </form>
      </div>
    )
  }



}

export default Search;
