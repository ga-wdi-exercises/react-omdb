// Developer TODO: Define App component defintion here

import React, { Component } from 'react'
import SearchContainer from './SearchContainer'
import './Home.css'

class Home extends Component {
  constructor() {
    super()
    this.state = {
    }
  }
  render() {
    return(
    <div className="home">
      <h1>React OMDB</h1>
    <SearchContainer />
    </div>
    )
  }
}

export default Home
