import React, {Component } from 'react';
import Search from './Search';
import Results from './Results';

class SearchContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      query: '',
      hasSearched: false
    }
  }

  onSearchInput (e) {
    this.setState({
      query: e.target.value
    })
  }

  onSubmitQuery(e) {
    evt.preventDefault()
    console.log(this.state.query)
    this.setState({
      query: '',
      hasSearched: true
    })
  }

  render() {
    return (
      <Search
      handleSearchInput={ (evt) => this.onSearchInput) }
      handleSubmitQuery={ (evt) => this.onSumbitQuery(evt) }
      query={this.state.query}
      />
    )
  }
}
export default SearchContainer
