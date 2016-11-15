// Developer TODO: Define App component defintion here
import React, { Component } from 'react'
import Search from './Search.js'

class Home extends Component {
  render() {
    return(
      <div>
        <h1>Welcome</h1>
        <Search />
      </div>
    )
  }
}

export default Home
