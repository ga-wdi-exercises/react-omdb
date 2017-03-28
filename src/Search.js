import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
      super(props)
      this.state = {
        query: ''
      }
      }
      //Is (e) convention?
      handleSearchInput (e) {
        this.setState({
          query: e.target.value
        })
      }
  submitQuery(evt){
    evt.preventDefault();
    console.log(this.state.query)
  }
  render() {
    return (
      <div className="searchBox">
        <form onSubmit={(evt) => this.submitQuery(evt)}>
        <input
        onChange={(evt) => this.handleSearchInput(evt)}
        value={this.state.query}
        type="text"
        placeholder="Submit a Movie Title Right about here...."
        />
        <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}


export default Search;
