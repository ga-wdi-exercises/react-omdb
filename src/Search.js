import React, {Component} from 'react'

const Search = props => {
    return (
      <form onSubmit={ e => props.onSearchSubmit(e) } >
        <input
          type="text"
          value={props.searchTerm}
          onChange={ e => props.onSearchInput(e) }
          placeholder="Enter a Movie Title.." />
        <input type="submit" />
      </form>
    )
  }

export default Search
