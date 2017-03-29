import React, { Component } from 'react';
import Search from './Search'

class Home extends Component {
  render(){
    return(
      <div>
        <h1>Movie Finder App</h1>
        <Search />
      </div>
    )
  }
}

export default Home
