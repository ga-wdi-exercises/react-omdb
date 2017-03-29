import React, { Component } from 'react';
import SearchContainer from './SearchContainer'

class Home extends Component {
  render() {
    return (
      <div className="app-header">
        <marquee>
          <h1>Welcome to Move eHub</h1>
        </marquee>
        <SearchContainer />
      </div>
    )
  }
}

export default Home;
