import React, { Component } from 'react'
import SearchContainer from './SearchContainer'

class Home extends Component {
  render(){
    return(
      <div className="main-container">
        <h1>React OMDB</h1>
        <SearchContainer/>
      </div>
    )
  }
}

export default Home
