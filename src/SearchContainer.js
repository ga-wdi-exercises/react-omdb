import React, { Component } from 'react'
import Search from './Search'


class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ""
    }
  }

  onSearchInput(event) {
    this.setState({
      query: event.target.value
    })
  }

  onSubmitQuery(event) {
    event.preventDefault()
    console.log(this.state.query)
  }

  render(){
    return(
      <Search
        submitQuery={(e) => this.onSubmitQuery(e)}
        searchInput={(e) => this.onSearchInput(e)}
        query={this.state.query}
      />
    )
  }
}

export default SearchContainer
