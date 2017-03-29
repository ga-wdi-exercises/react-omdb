                               // ####################################
                              // 201703282333L   EL MARTES   JAY
import React, { Component } from 'react';
import Search from './Search';
import Results from './Results'

class SearchContainer extends Search {
                      constructor(props) {
                        super(props)
                          this.state = {
                                          searchString:        ''
                                        , hasSearched:  false
                                      }
                                    }
  onSearchStringInput(e) {
                        this.setState({ searchString: e.target.value })
                        console.log('SHOW ME THIS.STATE.QUERY:'   this.state.searchString);
  }
  onSearchStringSubmit(e) {
                        e.preDefault();
                        console.log('SHOW ME THIS.STATE.SEARCHSTRING:'   this.state.searchString);
                        // this.setState({ searchString:      '' , hasSearched: true }) }
                        this.setState({
                                        searchString:      ''
                                      , hasSearched: true
                                    }
                                  ,
                                () => { console.log('SHOW ME THIS.STATE.SEARCHSTRING:'   this.state.searchString);
                                $.ajax({
                                    url:      `http://www.omdbapi.com/?t=${this.state.searchString}`
                                  , type:     'get'
                                  , dataType: 'json'
                                }).done((response) => {
                                  console.log('SHOW ME RESPONSE:'   response);
                              )}
                            })
                    }
  render() {
    let movies = [ {title: "Star Wars", poster_url: "http://fallmeeting.agu.org/2015/files/2015/12/Star-Wars.jpg"}, {title: "Top Gun", poster_url: "http://ecx.images-amazon.com/images/I/51YimkRDEjL._SY445_.jpg"} ]
    if(this.state.hasSearched ) {
      return ( <Results movies={movies} /> ) }
    else {
      return(
        <Search
                handleSearchInput={(e) => this.onSearchStringInput(e)}
                handleSubmitQuery={(e) => this.onSearchStringSubmit(e)}
                searchString={this.state.searchString}
        />
      )
    }
  }
}
export default SearchContainer
