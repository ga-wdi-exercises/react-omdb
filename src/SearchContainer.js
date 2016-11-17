import React, { Component } from 'react'
import $ from 'jquery'
import Search from './Search.js'
import Results from './Results.js'

class SearchContainer extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: "",
      showResults: false,
      results: ""
    }
  }

  handleSearchInput(e) {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSearchSubmit(e) {
    e.preventDefaults
    this.setState({
      results: this.getResults(),
      showResults: true
    })
  }

  handleClearResults(e) {
    this.setState({
      showResults: false
    })
  }

  getResults() {
    // let url = "http://www.omdbapi.com/?t=" + this.state.searchTerm
    $.getJSON("http://www.omdbapi.com/?t=star+trek").then(res => {
      return res["Search"]
    })
  }

  render() {

    let display

    if (this.state.showResults === false) {
      display =
        <Search
          searchTerm={this.state.searchTerm}
          onSearchInput={ e => this.handleSearchInput(e) }
          onSearchSubmit={ e => this.handleSearchSubmit(e) }
        />
    } else {
      display =
        <Results
          results={this.state.results}
          onClearResults={ e => this.handleClearResults(e) }
        />
    }

    return (
      <div>
        {display}
      </div>
    )
  }
}

export default SearchContainer
