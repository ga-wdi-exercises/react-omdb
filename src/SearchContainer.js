import React, { Component } from 'react';
import Search from './Search'

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: "",
      searching: false,
    }
  }

  handleSearchSubmit(e) {
    e.preventDefault()
    console.log(this.state.query);
  }

  handleSearchInput(e) {
    this.setState({
      query: e.target.value
    })
  }

  render() {
    return (
      <Search
        query={this.state.query}
        onSearchSubmit={ e => this.handleSearchSubmit(e) }
        onSearchInput={ e => this.handleSearchInput(e) }
      />
    )
  }


}

export default SearchContainer
