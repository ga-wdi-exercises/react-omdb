import React, { Component } from 'react'

class Search extends Component {
  render() {
    return (
      <form onSubmit={ e => this.props.onSearchSubmit(e) }>
        <input
          type="text"
          value={this.props.searchTerm}
          onChange={ e => this.props.onSearchInput(e) }
          placeholder="enter movie title" />
        <input type="submit" value="Go" />
        <p>{this.props.searchTerm}</p>
      </form>
    )
  }
}

export default Search