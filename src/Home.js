import React, { Component } from 'react'
import Search from "./SearchContainer"

class Home extends Component {
  render() {
    return (
      <div>
        <h1>React OMDB</h1>
        <SearchContainer />
      </div>
    )
  }
}

export default Home
