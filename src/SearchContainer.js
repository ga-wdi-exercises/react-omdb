import React, { Component } from 'react';
import Search from './Search'
import Results from './Results'
import axios from 'axios'

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: "",
      searching: true,
    }
  }

  handleSearchSubmit(e) {
    e.preventDefault()
    axios.get(`http://www.omdbapi.com/?s=${this.state.query}`)
      .then(res => {
        this.setState({results: res.data.Search, searching: false})
      })
  }

  handleSearchInput(e) {
    this.setState({
      query: e.target.value
    })
  }

  render() {
    let search = (<Search
        query={this.state.query}
        onSearchSubmit={ e => this.handleSearchSubmit(e) }
        onSearchInput={ e => this.handleSearchInput(e) }
      />)

    let results = <Results results={this.state.results}/>

    return (
      this.state.searching ? search : results
    )
  }


}

export default SearchContainer
