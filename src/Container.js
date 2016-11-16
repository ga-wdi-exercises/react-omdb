import React, { Component } from 'react'
import Search from "./Search"

class Container extends Component {
  constructor(){
    super()
    this.state = {
      query: ''
    }
  }
  onClick(event){
    event.preventDefault()
    console.log(this.state.query);
  }
  onChange(event){
    this.setState({query:event.target.value})
  }
  render(){
    return (
      <Search />
    )
  }
}

export default Container
