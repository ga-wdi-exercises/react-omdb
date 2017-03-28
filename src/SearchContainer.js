import React, { Component } from 'react';
import Search from './Search.js';
import Results from './Results.js';
import {queryOmdb} from './Utils';

class SearchContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      query: '',
      hasSearched: false,
      movies: []
    }

  }

  onHandleSearch(e){
    this.setState({
      query: e.target.value
    })
  }


  onSubmitQuery(event){
      event.preventDefault()
      let component = this
      queryOmdb(this.state.query).then(data => {
        component.setState({
        query: '',
        hasSearched: true,
        movies: data
      })
    })
  }

  render(){


   if (this.state.hasSearched){
     return (
       <Results movies={this.state.movies} />
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
