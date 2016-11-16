import React, {Component} from 'react'
import Search from './Search.js'
import Results from './Results.js'

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      hasSearched: false
    }
  }
  handleChange(e){
    this.setState({
      query: e.target.value
    })
  }
    handleSearchSubmit(e) {
      e.preventDefault()
      console.log("clicked")
    }
        render() {
          return (
              <Search
                query={this.state.query}
                onSearchSubmit={e => this.handleSearchSubmit(e)}
                onSearchInput={e => this.handleChange(e)}

              />

          )
        }
}

export default SearchContainer
