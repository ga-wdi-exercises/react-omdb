import React, {Component} from 'react'

class Search extends Component{
  render(){
    return(
      <form onSubmit = {(e) => this.props.onSearchSubmit(e)}>
        <input type="text" value={this.props.searchTerm} onChange={(e) => this.props.onSearchInput(e)} placeholder="Movie Name" />
        <button>Submit</button>
      </form>
    )
  }
}





export default Search
