import React, { Component } from 'react'
import Search from './Search'
import Results from './Results'
import $ from 'jquery'

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
    console.log(this.state.searchVal);
    this.setState({
      searchVal: '',
      hasSearched: true
    }, () => {
      console.log(this.state.searchVal);
      $.ajax({
        url: `http://www.omdbapi.com/?t=${this.state.searchVal}`,
        type: "get",
        dataType: "json"
      }).done((response) => {
        console.log(response);
      })
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
