import React, {Component} from 'react'

class Search extends Component {
  render() {
    return (
      <form onSubmit={e => this.props.submit(e)}>
        <input type="text" placeholder="search" onChange={e => this.props.change(e)} />
        <button type="submit">Search</button>
      </form>
    )
  }
}

export default Search
