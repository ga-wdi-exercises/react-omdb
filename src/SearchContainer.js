import React, { Component } from 'react'
import Search from './Search'
import Results from './Results'

class SearchContainer extends Component {
  constructor(props){
    super(props)
    this.state={
      query: '',
      hasSearched: false
    }
  }

  onSearchInput(e){
    this.setState({
      query: e.target.value
    })
  }

  onSubmitQuery(e){
    e.preventDefault()
    this.setState({
      query: '',
      hasSearched: true
    })
  }

  render(){
    let movies=[
      {title: "Love & Basketball", poster_url:"http://static.rogerebert.com/uploads/movie/movie_poster/love-and-basketball-2000/large_zQoCjIInTAmt7LTLRNOiPMAeb8E.jpg"},
      {title: "Save the Last Dance", poster_url:"https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/SaveTheLastDance.jpg/220px-SaveTheLastDance.jpg"},
      {title: "She's all that", poster_url:"http://www.dvdsreleasedates.com/posters/300/S/Shes-All-That-1999.jpg"}
    ]
    if(this.state.hasSearched){
      return(
        <Results movies={movies} />
      )
    } else {
        return(
          <Search
          handleSearchInput={(e) => this.onSearchInput(e)} handleSubmitQuery={(e) => this.onSubmitQuery(e)} query={this.state.query}
          />
          )
        }
      }
    }

export default SearchContainer
