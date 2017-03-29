import React, { Component } from 'react';


class Search extends Component {
  constructor(props){
    super()
    this.state ={
      query: ''
    }
  }

  handleSearchInput(e){
    this.setState({
      query: e.target.value
    })
  }

  submitQuery(e){
    e.preventDefault()
  }
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
