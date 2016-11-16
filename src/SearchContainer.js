import React, { Component } from 'react'
import Search from './Search'
import Results from './Results'
import axios from 'axios'

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      results: null
    }
  }

  handleSearchInput(e) {
    this.setState({
      query: e.target.value
    })
  }

  handleSearchSubmit(e) {
    e.preventDefault()
    let component = this
    let term = this.state.query.replace(/\s/, "+")
    let url = "http://omdbapi.com/?s=" + term
    axios(url).then((response) => {
      component.setState({
        results: response.data.Search
      })
      console.log(component.state.results)
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    if(this.state.results) {
      return(
        <Results movies={this.state.results}/>
      )
    } else {
      return(
        <Search
          query={this.state.query}
          onSearchInput={(e) => this.handleSearchInput(e)}
          onSearchSubmit={(e) => this.handleSearchSubmit(e)}
        />
      )
    }
  }
}

export default SearchContainer
