import React, { Component } from 'react'
import SearchContainer from './SearchContainer.js'

class Home extends Component {
  render() {
    return (
      <div>
        OMDB React
        <SearchContainer />
      </div>
    )
  }
}

export default Home
