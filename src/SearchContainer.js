import React, { Component } from 'react'
import Search from './Search'
import Results from './Results'

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      hasSearched: false,
    }
  }

  onSearchInput(e) {
    this.setState({
      searchTerm: e.target.value,
    })
  }

  onSearchSubmit(e) {
    e.preventDefault()
    this.setState({
      searchTerm: '',
      hasSearched: true,
    })
  }

  render() {
    let movies = [
      {title: "Star Wars", poster_url: "http://fallmeeting.agu.org/2015/files/2015/12/Star-Wars.jpg"},
      {title: "Top Gun", poster_url: "http://ecx.images-amazon.com/images/I/51YimkRDEjL._SY445_.jpg"}
    ]
    if (this.state.hasSearched) {
      return(
        <Results movies={movies} />
      )
    } else {
      return(
        <Search
          handleSearchInput={e => this.onSearchInput(e)}
          handleSearchSubmit={e => this.onSearchSubmit(e)}
          searchTerm={this.state.searchTerm}
        />
      )
    }
  }
}

export default SearchContainer
