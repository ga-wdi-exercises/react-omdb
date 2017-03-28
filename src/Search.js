import React, { Component } from 'react'

class Search extends Component{


  render(){
    let {
      handleSubmit,
      handleSearchInput,
      query
    } = this.props
    
    return(
      <div className="searchBox">
        <form  onSubmit={(event) => this.handleSubmit(event)} >
        <input
        onChange={(event)=> this.handleSearchInput(event)}
        value={query}
        type="text"  placeholder="Search for movies..."/>
        <button type="submit"> Search </button>
        </form>
      </div>
    )
    }
  }


export default Search;
