import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div>
      <h1>Search</h1>
      <form onSubmit={e => this.props.onSearchSubmit(e)}>
      <input type="text" value={this.props.query} onChange={e => this.props.onSearchInput(e)} />
      <input type="submit" value="Submit" />
      <p>{this.props.query}</p>
      </form>
      </div>
    )
  }
}


export default Search
