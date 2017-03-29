import React, { Component } from 'react'


class Search extends Component {
  constructor() {
    super()
    this.state = {
      query: ''
    }
  }

  onSubmitQuery(event) {
    event.preventDefault()
    console.log("clicked")

  }

  render() {
    return (
      <div className="searchBox">
      <form onSubmit={(event) => this.onSubmitQuery(event)}>
        <input type="text" placeholder="Enter Movie Title Here..." />
        <button type="submit"> Search </button>
      </form>
      </div>
    )
  }



}

export default Search;
