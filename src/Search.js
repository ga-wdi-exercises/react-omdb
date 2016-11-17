import React, {Component} from 'react'

class Search extends Component {
  render (){
    return (
      <form onSubmit={e => this.props.onSearchSubmit(e)}>
      <input
        type="text"
        value={this.props.searchTerm}
        onChange={ e => this.props.onSearchInput(e)}
        placeholder="Enter a Movie Title"/>
      <button>Search</button>
      </form>
    )
  }
}

export default Search
