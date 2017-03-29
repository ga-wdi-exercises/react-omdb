import React, {Component} from "react"
import Search from "./Search"
import Results from "./Results"
import {queryOmdb} from "./Apidata"


console.log(queryOmdb)
class SearchContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      query: '',
      hasSearched: false,
      movies: [],

    }
  }

  onSearchInput (evt) {
    this.setState({
      query: evt.target.value,
    })
  }

  handleToggleSearch (evt) {
    let hasSearched = !this.state.hasSearched
    this.setState(Object.assign(this.state, {hasSearched, }))
  }

  onSubmitQuery(evt){
    evt.preventDefault()
    let component = this
    queryOmdb(this.state.query).then( data => {
      component.setState({
        query: '',
        hasSearched: !component.state.hasSearched,
        movies: data,
      })
    })
  }

  render(){
    if (this.state.hasSearched){
      return (
        <div>
        <button
        onClick={ evt => this.handleToggleSearch(evt) }
        className="btn btn-default">
        Search Again
        </button>
        <Results movies={this.state.movies} />
        </div>
      )
    } else {
      return  (
        <Search
        handleSearchInput={ (evt) => this.onSearchInput(evt) }
        handleSubmitQuery={ (evt) => this.onSubmitQuery(evt) }
        query={this.state.query} />
      )
    }
  }
}


export default SearchContainer
