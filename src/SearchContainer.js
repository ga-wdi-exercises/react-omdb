import React, { Component } from 'react'
import Search from "./Search"
import Results from "./Results"
// collection = [{title: "Batman", poster:"https://upload.wikimedia.org/wikipedia/en/1/17/Batman-BenAffleck.jpg"}, {title:"The Flash", poster:"http://static.srcdn.com/wp-content/uploads/flash-movie-director-writer-grahame-smith.jpg"}]

class SearchContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchQuery: '',
      hasSearched: false
    }
  }
  handleSearchInput(e) {
    console.log(e.target)
    this.setState({
      searchQuery: e.target.value
    })
  }
  handleSearchSubmit(e) {
    e.preventDefault()
    console.log("submitted")
  }
  handleResultsInput(e) {
    console.log(e.target)
  }
  handleResultsSubmit(e){
    e.preventDefault()
    console.log("found")
  }
  render() {
    return (
      <Search
        searchQuery={this.state.searchQuery}
        onSearchSubmit = {e => this.handleSearchSubmit(e) }
        onSearchInput = {e => this.handleSearchInput(e) }
      />,
      <Results
      // collection = {collection}

      />
    )
  }
}

export default SearchContainer
