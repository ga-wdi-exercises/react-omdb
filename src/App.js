// Developer TODO: Define App component defintion here
import React, {Component} from 'react'
import Search from './Search'

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
    }
  }

  handleSearchInput(e) {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSearchSubmit(e){
    e.preventDefault()
    console.log(this.state.searchTerm);
  }

  render(){
    return (
      <Search
        searchTerm={this.state.searchTerm}
        onSearchSubmit={ e => this.handleSearchSubmit(e) }
        onSearchInput={e => this.handleSearchInput(e)}
      />
    )
  }
}

export default SearchContainer
