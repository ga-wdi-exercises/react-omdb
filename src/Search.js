import React, { Component } from 'react';


class Search extends Component {


  render(){
    return (
      <div>
        <form onSubmit={(event) => this.props.submitQuery(event)}>
          <input type="text" placeholder="Search for a movie..." value={this.props.query} onChange={(e) => this.props.handleSearch(e)} />
          <button type="submit" > Search </button>
        </form>
      </div>
    )
  }

}

export default Search;
