import React, {Component} from 'react'


class Search extends Component {
  constructor (props) {
    // make call to parent class' (Component) constructor
    super()
    // define an initial state
    this.state = {
      searchString: "" // initialize search string
    }
  }
  handleSearchChg(event) {
    this.setState({searchString: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("searchString=",this.state.searchString)
  }

  render () {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
             <input type="text"  placeholder = "Movie Search" value={this.state.value} onChange={(e) => this.handleSearchChg(e)} />
             <input type="submit" value="Search" />
           </form>

    )
  }
}

export default Search
