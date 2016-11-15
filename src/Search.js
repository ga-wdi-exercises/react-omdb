import React, { Component} from 'react'

class Search extends Component {
  render() {
    return(
      <div className="search">
        <form>
          <input type="text" placeholder="Enter a movie title" />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Search
