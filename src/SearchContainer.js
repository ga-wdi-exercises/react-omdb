import React, { Component } from 'react'
import Search from './Search'
import Results from './Results'

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchVal: '',
      hasSearched: false
    }
  }

  onSearchMovie(e) {
    e.preventDefault()
    this.setState({
      searchVal: '',
      hasSearched: true
    })
  }

  onSearchVal(e) {
    this.setState({
      searchVal: e.target.value
    })
  }

  render() {
    let movies = [
      {title: "Star Wars", poster_url: ""},
      {title: "Top Gun", poster_url: ""}
    ]

    if(this.state.hasSearched) {
      return (
        <Results movies={movies} />
      )
    } else {
      return(
        <Search
          handleSearchVal={(e) => this.onSearchVal(e)}
          handleSearchMovie={(e) => this.onSearchMovie(e)} />
      )
    }
  }
}

export default SearchContainer
