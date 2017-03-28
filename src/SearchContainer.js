import React, { Component } from 'react';
import Search from './Search.js';
import Results from './Results.js';

class SearchContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      query: '',
      hasSearched: false
    }

  }

  onHandleSearch(e){
    this.setState({
      query: e.target.value
    })
  }


  onSubmitQuery(event){
      event.preventDefault()
      console.log(this.state.query)
      this.setState({
        query: '',
        hasSearched: true
      })
  }

  render(){
    let movies = [
     {title: "Star Wars", poster_url: "http://fallmeeting.agu.org/2015/files/2015/12/Star-Wars.jpg"},
     {title: "Top Gun", poster_url: "http://ecx.images-amazon.com/images/I/51YimkRDEjL._SY445_.jpg"}
   ]

   if (this.state.hasSearched){
     return (
       <Results movies={movies} />
     )
   } else {
      return(
        <div>
        <Search
        handleSearch={ (e) => this.onHandleSearch(e) }
        submitQuery={ (e) => this.onSubmitQuery(e)}
         query={this.state.query}
          />
        </div>

      )
    }
  }

}

export default SearchContainer
