import React, {Component} from 'react'
import Search from './Search.js'
import Results from './Results.js'

class SearchContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchTerm: '',
      hasSearched: false

    }
  }
  handleSearchInput(e){
    this.setState({
      searchTerm: e.target.value
    })
  }
  handleSearchSubmit(e){
    e.preventDefault()
    this.setState({
      searchTerm: '',
      hasSearched: true
    })
  }

  render() {
    return (
      let movies = [
           {title: "Star Wars", poster_url: "http://fallmeeting.agu.org/2015/files/2015/12/Star-Wars.jpg"},
           {title: "Top Gun", poster_url: "http://ecx.images-amazon.com/images/I/51YimkRDEjL._SY445_.jpg"}
         ]

      <Search
        searchTerm={this.state.searchTerm}
        onSearchSubmit={e => this.handleSearchSubmit(e)}
        onSearchInput={e => this.handleSearchInput(e)}
      />
    )
  }
}
export default SearchContainer
