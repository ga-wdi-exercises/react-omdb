import React, { Component } from 'react';
import Search from './Search';
import Results from './Results'

class SearchContainer extends Search {
                                    constructor(props) {
                                                        super(props)
                                                        this.state = {
                                                                        query:        '',
                                                                        hasSearched:  false
                                                                      }
                                                                    }
  onSearchInput(event) {
                        this.setState({ query: event.target.value, })
  }

  onSubmitQuery(event) {
                        event.preventDefault();
                        console.log('SHOW ME THIS.STATE.QUERY:'   this.state.query);
                        this.setState({
                                        query: '',
                                        hasSearched: true
                                      })
                      }
  render() {
    let movies = [ {title: "Star Wars", poster_url: "http://fallmeeting.agu.org/2015/files/2015/12/Star-Wars.jpg"}, {title: "Top Gun", poster_url: "http://ecx.images-amazon.com/images/I/51YimkRDEjL._SY445_.jpg"} ]

    if(this.state.hasSearched) {
      return (
                <Results movies={movies} />
              )
    }
    else {
      return(
        <Search
                handleSearchInput={(event) => this.onSearchInput(event)}
                handleSubmitQuery={(event) => this.onSubmitQuery(event)}
                query={this.state.query}
        />
      )
    }
  }
}
export default SearchContainer
