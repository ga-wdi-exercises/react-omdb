import React, { Component } from 'react'
import Search from './Search'

class SearchContainer extends Component {
  // moved business logic from Searc.js to here..

  // initial state with `query` value that corresponds to a search term
  constructor(props) {
    super(props)
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
      <Search
        handleSubmitQuery={(e) => this.onSubmitQuery(e)}
        handleSearchInput={(e) => this.onSearchInput(e)}
        query={this.state.query}
      />
    )
  }


}

export default SearchContainer;
