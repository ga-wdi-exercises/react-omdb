import React, { Component } from 'react';
import './App.css';

class Search extends Component {
  _submitSearch(event){
    event.preventDefault();
    let newQuery = this.refs.searchForm.value;
    this.props.newSearch(newQuery);
    this.refs.searchForm.value = "";
    this.refs.searchForm.focus();
  }
  render() {
    return (
        <div>
          <p>Search for movies here!</p>
          <form onSubmit={this._submitSearch.bind(this)}>
            <input type="text" placeholder="Movie title" ref="searchForm" />
            <input type="submit" value="Search" />
          </form>
        </div>
    );
  }
}

export default Search;
