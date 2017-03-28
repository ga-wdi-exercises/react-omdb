import React, {Component} from 'react'
import Search from './Search'
import Results from './Results'
import {queryMovies} from './Utils'

class SearchContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      query: '',
      hasSearched: false,
      movies: []
    }
  }

  onSearchInput(e){
    this.setState({
      query: e.target.value
    })

  }

  onSubmitQuery(e){
  e.preventDefault()
  let component = this
  queryMovies(this.state.query).then( movieResults => {
    component.setState({
      query: '',
      hasSearched: true,
      movies: movieResults

    })
  })
}

  render(){

    if(this.state.hasSearched){
      return(
        <Results movies={this.state.movies}/>
      )
    }
    else {

    return(
        <Search
        handleSearchInput={(e) => this.onSearchInput(e)}
        handleSubmitQuery={(e) => this.onSubmitQuery(e)}
        query={this.state.query}
        />

      )
    }
  }
  }





export default SearchContainer
