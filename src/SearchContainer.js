import React, { Component } from 'react';
import Search from './Search';
import Results from './Results';

class SearchContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      search: "",
      hasSearched: false
    };
  }
  onGetSearchTerm(e){
    this.setState({
      search: e.target.value
    });
  }
  onSubmitSearch(e){
    e.preventDefault();
    this.setState({
      search: e.target.value,
      hasSearched: true
    });
  }
  render(){
    let movies = [
      {title: "Star Wars", poster_url: "http://fallmeeting.agu.org/2015/files/2015/12/Star-Wars.jpg"},
      {title: "Top Gun", poster_url: "http://ecx.images-amazon.com/images/I/51YimkRDEjL._SY445_.jpg"}
    ];
    if(this.state.hasSearched){
      return(
        <Results movies={movies} />
      )
    }
    else{
      return(
        <Search
          submitSearch={(e) => this.onSubmitSearch(e)}
          getSearchTerm={(e) => this.onGetSearchTerm(e)}
          search={this.state.search}
        />
      )
    }
  }
}

export default SearchContainer
