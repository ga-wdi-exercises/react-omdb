import React, { Component } from "react";
import SearchContainer from "./SearchContainer"

class Search extends Component {

  render() {
    let {handleSearchInput, handleSubmitQuery, query} = this.props
    return(
      <div>
        <form>
          <input onChange={(e) => handleSearchInput(e)} type="text" name="search" placeholder="Enter a Movie Title Here..."></input>
          <input onClick={(e) => handleSubmitQuery(e)} type="submit" name="submit"></input>
        </form>
      </div>
   )
  }
}

export default Search
