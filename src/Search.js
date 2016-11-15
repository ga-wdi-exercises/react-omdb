import React, {Component} from 'react'

handleSearchChg(event) {
  this.setState({searchString: event.target.value});
}

handleSubmit(event) {
  event.preventDefault();
  console.log("searchString=",this.state.searchString)
}

class Search extends Component {
  render () {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
             Name:
             <input type="text" value={this.state.value} onChange={(e) => this.handleSearchChg(e)} />
             <input type="submit" value="Search" />
           </form>
    )
  }
}

export default Search
