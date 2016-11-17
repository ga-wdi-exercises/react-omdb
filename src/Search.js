import React, {Component} from 'react';



class Search extends Component {


  render() {
    let {handleSearchInput, handleSubmitQuery, query} = this.props
    return (
      <form onSubmit={(evt) => handleSubmitQuery(evt)}>
        <input type ="text" value={query} onChange={(evt) => handleSearchInput(evt)} placeholder="Enter a movie title.."></input>
        <input type ="submit"></input>
      </form>
    )
  }
}

export default Search
