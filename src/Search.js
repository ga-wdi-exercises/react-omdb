import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: "",
    }
  }

  handleSearchSubmit(e) {
    e.preventDefault()
    console.log(e);
  }

  updateQuery(e) {
    this.setState({
      query: e.target.value
    })
  }


  render() {
    return (
      <div className="search">
        <form onSubmit={e => this.handleSearchSubmit(e)}>
          <input onChange={e => this.updateQuery(e) } type="text" placeholder="Enter a movie title..." ></input>
          <button type="submit">SEARCH</button>
        </form>

      </div>
    )
  }
}

export default Search
