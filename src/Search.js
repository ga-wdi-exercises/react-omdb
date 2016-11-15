import React, { Component} from 'react'

class Search extends Component {


  render() {
    let { handleSearchInput, handleSearchSubmit, searchTerm } = this.props
    return(
      <div className="search">
        <form onSubmit={e => handleSearchSubmit(e)}>
          <input type="text" placeholder="Enter a movie title" onChange={ e => handleSearchInput(e)} value={searchTerm} />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Search
