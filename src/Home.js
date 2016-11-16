// Developer TODO: Define App component defintion here

import React, { Component } from 'react'
import Container from "./Container"

class Home extends Component {
  render(){
    return (
      <div className="home">
      <h3>Welcome</h3>
      <Container />
      </div>
    )
  }
}

export default Home
