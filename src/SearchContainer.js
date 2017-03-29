import React, { Component } from 'react'
import Search from './Search'

class SearchContainer extends Component {
  constructor(props){
    super(props)
    this.state ={
      query: ''
    }
  }

  handleSearchInput(e){
    this.setState({
      query: e.target.value
    })
  }

  submitQuery(e){
    e.preventDefault()
    this.setState({
      query: ''
    })
  }

  render(){
    return(
      <Search
      handleSearchInput={(e) => this.onSearchInput(e)}
      handleSubmitQuery={(e) => this.onSubmitQuery(e)}
      query={this.state.query}
      />
    )
  }
}

export default SearchContainer
