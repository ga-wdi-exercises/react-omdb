import React, {Component} from 'react'
import Search from './Search'

class SearchContainer extends Component {

  constructor (props) {
    // make call to parent class' (Component) constructor
    super()
    // define an initial state
    this.state={
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
    return(
      <Search
      searchString={this.state.searchString}
      onhandleSearchChg={ e => this.handleSearchChg(e)}
      onhandleSubmit={ e => this.handleSubmit(e)}
      />
    )
  }
}
export default SearchContainer
