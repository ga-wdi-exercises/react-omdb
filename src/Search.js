import React, {Component} from "react"

class Search extends Component{
  render(){
    return(
      <form onSubmit={ e => this.props.onSearchSubmit(e) }>
        <input
          type="text"
          value={this.props.searchTerm}
          onChange={ e => this.props.onSearchInput(e)}
          placeholder="Enter movie title.."/>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default Search
