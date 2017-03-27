import React, { Component } from 'react'
import Search from './Search'

class Home extends Component {
  render(){
    return(
      <div>
        <h1>GA Movie Library</h1>
        <h3>GA's #1 movie library</h3>
        <Search />
      </div>
    )
  }
}

export default Home
