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
    console.log(this.state.query)
    this.setState({
      query: e.target.value
    })
  }
    handleSearchSubmit(e) {
      e.preventDefault()
      console.log("clicked")
    }
        render() {
          //if statement for if a user has searched, render the Results Component
          var hasSearched = this.state.query
          if (hasSearched === true) {
            return <Results />
          }
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
