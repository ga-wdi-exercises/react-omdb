import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div className="search">
        <form onSubmit={e => this.props.onSearchSubmit(e) }>
          <input onChange={e => this.props.onSearchInput(e) }  value={this.props.query} type="text" placeholder="Enter a movie title..." ></input>
          <button type="submit">SEARCH</button>
        </form>
      </div>
    )
  }
}

export default Search
