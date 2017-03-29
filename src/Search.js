import React, { Component } from 'react'

class Search extends Component {

  render(){
    return (
      <form onSubmit={(e) => this.props.handleSearchMovie(e)}>
        <input type="text" onChange={(e) => this.props.handleSearchVal(e)}/>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default Search
