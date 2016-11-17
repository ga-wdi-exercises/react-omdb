import React, { Component } from 'react'

class Search extends Component {
  render() {
    return (
      <div>
        <input type="text" onChange={ e => this.props.onSearchInput(e) }/>
        <button onClick={ e => this.props.onSearchSubmit(e) }>Search</button>
      </div>
    )
  }
}

export default Search
