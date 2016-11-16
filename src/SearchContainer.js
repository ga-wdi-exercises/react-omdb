import React, { Component } from 'react'
import Search from './Search'
import Results from './Results'
import {queryOmbd} from './Utils'

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      hasSearched: false,
      movies: [],
    }
  }

  onSearchInput(e) {
    this.setState({
      searchTerm: e.target.value,
    })
  }

  onSearchSubmit(e) {
    e.preventDefault()
    let component = this
    queryOmbd(this.state.searchTerm).then( data => {
      component.setState({
        searchTerm: '',
        hasSearched: true,
        movies: data,
      })
    })
  }

  render() {
    if (this.state.hasSearched) {
      return(
        <Results movies={this.state.movies} />
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
