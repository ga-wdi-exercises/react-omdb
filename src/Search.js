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
        <form onSubmit={(evt) => this.submitQuery(evt)}>
        <input type='text' placeholder='Enter Movie Here'></input>
        <button type='submit'>Search</button>
        </form>
      </div>
    )
  }
}
export default Search
