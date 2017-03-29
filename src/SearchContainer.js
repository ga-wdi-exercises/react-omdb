import React, { Component } from 'react'
import Search from './Search'
import Results from './Results'
import {queryOmdb} from './Utils'

class SearchContainer extends Component {
  // moved business logic from Searc.js to here..

  // initial state with `query` value that corresponds to a search term
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      hasSearched: false,
      movies: [],
    }
  }

  // updates `query` value in state whenever a change is made to the input field
   onSearchInput(e) {
     this.setState({
       query: e.target.value,
     })
   }

   handleToggleSearch(e) {
     let hasSearched = !this.state.hasSearched
     this.setState(Object.assign(this.state, {hasSearched, }))
   }

// triggered whenever the user submits the Search form
  onSubmitQuery(e) {
    e.preventDefault()
    let component = this
    queryOmdb(this.state.query).then( data => {
      component.setState({
        query: '',
        hasSearched: !component.state.hasSearched,
        movies: data,
      })
    })
  }


  render() {
    if (this.state.hasSearched){
      return(
        <div>
        <button onClick={ e => this.handleToggleSearch(e)}>
          Search Again
          </button>
          <Results movies={this.state.movies}/>
        </div>
      )
    } else {
      return(
        <Search
          handleSubmitQuery={(e) => this.onSubmitQuery(e)}
          handleSearchInput={(e) => this.onSearchInput(e)}
          query={this.state.query}
        />
      )
    }
  }
}

export default SearchContainer;
