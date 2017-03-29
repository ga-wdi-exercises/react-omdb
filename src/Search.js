import React, { Component } from 'react'


class Search extends Component {
  render(){
    return(
      <div className="searchBox">
        <form onSubmit={(e) => this.props.handleSubmitQuery(e)}>
          <input onChange={(e) => this.props.handleSearchInput(e)} value={this.props.query} type="text" placeholder="Enter a movie title . .  ."/>
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }

}

export default Search
