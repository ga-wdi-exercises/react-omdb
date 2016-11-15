import React, { Component} from 'react'

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

  handleSearchSubmit(e) {
    e.preventDefault()
    console.log(this.state.searchTerm)
  }

  render() {
    return(
      <div className="search">
        <form onSubmit={e => this.handleSearchSubmit(e)}>
          <input type="text" placeholder="Enter a movie title" onChange={ e => this.handleSearchInput(e)} value={this.state.searchTerm} />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Search
