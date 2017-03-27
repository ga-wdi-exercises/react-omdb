import React, {Component} from "react"
import Search from "./Search"

class SearchContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      query: ''
    }
  }

  onSearchInput (evt) {
    this.setState({
      query: evt.target.value
    })
  }

  onSubmitQuery(evt){
    evt.preventDefault();
    console.log(this.state.query)
    this.setState({
      query: ''
    })
  }

  render(){
    return (
      <Search
      handleSearchInput={ (evt) => this.onSearchInput(evt) }
      handleSubmitQuery={ (evt) => this.onSubmitQuery(evt) }
      query={this.state.query}
      />
    )
  }
}

export default SearchContainer
