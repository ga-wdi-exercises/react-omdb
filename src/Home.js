// Developer TODO: Define App component defintion here

import React, {Component} from 'react'
import Search from './Search.js'

// const HelloWorld = props => <h1> Hello World </h1>
class Home extends Component {
  render() {
    return (
      <div className="main-container">
      <h1> React OMDB </h1>
      <Search />
      </div>
    )
  }
}

export default Home
