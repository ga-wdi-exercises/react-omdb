import React, { Component } from 'react'

class Search extends Component{
  constructor(props){
    super(props)
    this.state = {
      query: ''
    }
  }
  submitSearch(e){
    e.preventDefault();
  }
  render(){
    return(<div className="searchBox">
      <form onSubmit={(e) => this.props.submitSearch(e)}>
        <input type="text"
          placeholder="Enter a Movie Title"
          value={this.props.search}
          onChange={(e) => this.props.getSearchTerm(e)}/>
        <p><button type="Submit">Search</button></p>
      </form>
    </div>)
  }
}

export default Search
