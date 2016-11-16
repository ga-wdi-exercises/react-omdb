import React, {Component} from 'react'

class Search extends Component {

  render(){
    return (
      <form onSubmit={e => this.props.onSearchSubmit(e) } >
        <input id="search"
         value={this.props.searchQuery}
         onChange={e => this.props.onResultsQuery(e) }
         placeholder="Search Movies"/>
        <input type="submit" />
      </form>

    )
  }
}
export default Search
