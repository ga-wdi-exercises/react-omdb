import React, {Component} from 'react'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
  }

  handleSearchInput(e) {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSearchSubmit(e){
    e.preventDefault()
  }

  render(){
    return (
      <form onSubmit={ e => this.handleSearchSubmit(e) } >
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={ e => this.handleSearchInput(e) }
          placeholder="Enter a Movie Title.." />
        <input type="submit" />
        <p>{this.state.searchTerm}</p>
      </form>
    )
  }
}

export default Search
