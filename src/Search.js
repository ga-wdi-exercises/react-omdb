import React, { Component } from 'react';


class Search extends Component {
  
  render(){
    return(
      <div>
        <form onSubmit={(e) => this.submitQuery(e)}>
          <input onChange={(e) => this.handleSearchInput(e)} value={this.state.query} type="text" placeholder="Enter a movie title . .  ."/>
          <button type="submit">Search</button>
        </form>
      </div>

    )
  }

}

export default Search
