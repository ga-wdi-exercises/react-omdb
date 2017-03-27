import React, { Component } from 'react'

class Search extends Component {

  constructor(props) {
    super(props)
    this.state = {
      query: ""
    }
  }

  searchInput(event) {
    this.setState({
      query: event.target.value
    })
  }

  submitQuery(event) {
    event.preventDefault()
    console.log(this.state.query)
  }

  render(){
    return(
      <form onSubmit={(e) => {this.submitQuery(e)}}>
      <input type="text" placeholder="Search for a movie title..." onChange={(e) => {this.searchInput(e)}} value={this.state.query} />
      <button type="submit">Search</button>
      </form>
    )
  }
}

export default Search
