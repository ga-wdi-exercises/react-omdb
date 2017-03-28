import React, {Component} from 'react'

class Search extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="search" />
        <button type="submit">Search</button>
      </form>
    )
  }
}

export default Search
