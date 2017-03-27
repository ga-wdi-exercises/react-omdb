import React, { Component } from 'react'

class Search extends Component {

  constructor(props){
    super(props)
    this.state = {
      query: ''
    }
  }

  handleSearchInput(event){
    this.setState({
      query: event.target.value
    })
  }

  submitQuery(event){
    event.preventDefault();
    console.log(this.state.query);
  }

  render(){
    return(
      <div>
        <form onSubmit={(event) => {this.submitQuery(event)}}>
          <input type="text" placeholder="Search a title..." onChange={(event) => {this.handleSearchInput(event)}} value={this.state.query} />
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default Search
