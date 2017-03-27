import React, { Component } from 'react'
import Search from './Search'

class SearchContainer extends Component {
  constructor(props){
    super(props){
      query: '',
      movies: []
    }
  }

  onSearchInput(event){
    this.setState({
      query: event.target.value
    })
  }

  onSubmitQuery(event){
    event.preventDefault();
    console.log(this.state.query)
    this.setState({
      query: ''
    })
  }

  render(){
    <Search
      onSearchInput={(event) => this.onSearchInput(event)}
      onSubmitQuery={(event) => this.onSubmitQuery(event)}
    />
  }
}


export default SearchContainer;
