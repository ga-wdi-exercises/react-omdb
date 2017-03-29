import React, { Component } from 'react'

class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      query: ''
    }
  }


  submitQuery(evt){
    evt.preventDefault();
    console.log(this.state.query);
  }
  render(){
    return(
      <div>
        <form onSubmit={(evt) => this.props.submitQuery(evt)}>
        <input type='text' placeholder='Enter Movie Here' value={this.props.query} onChange={(evt) => this.props.handleSearch(evt)}></input>
        <button type='submit'>Search</button>
        </form>
      </div>
    )
  }
}
export default Search
