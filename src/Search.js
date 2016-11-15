import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <h1>Search</h1>
    <form onSubmit={this.handleSubmit}>
    <input type="text" value={this.state.value} onChange={this.handleChange} />
    <input type="submit" value="Submit" />
    </form>
    )
  }
}


export default Search
