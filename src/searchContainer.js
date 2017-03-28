import React, { Component } from 'react'
import Search from './Search'

class searchContainer extends Component {
  constructor(props){
    super()
    this.state={
      query:''
    }
  }

  handleSearchInput(event){
    this.setState({
      query: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    console.log(this.state.query)
  }
}
export default searchContainer;
