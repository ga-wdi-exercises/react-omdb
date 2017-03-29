import React, { Component } from 'react'


class Search extends Component {
  // initial state with `query` value that corresponds to a search term
  constructor() {
    super()
    this.state = {
      query: ''
    }
  }
// triggered whenever the user submits the Search form
  onSubmitQuery(event) {
    event.preventDefault()
    console.log("clicked")
    this.setState({
      query: ''
    })
  }
 // updates `query` value in state whenever a change is made to the input field
  onSearchInput(e) {
    this.setState({
      query: e.target.value
    })
  }

  render() {
    return (
      <div className="searchBox">
      <form onSubmit={(event) => this.onSubmitQuery(event)}>
        <input onChange={(event) => this.onSearchInput(event)} type="text" placeholder="Enter Movie Title Here..." />
        <button type="submit"> Search </button>
      </form>
      </div>
    )
  }



}

export default Search;
