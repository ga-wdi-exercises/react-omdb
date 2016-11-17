import React, { Component } from 'react';
import SearchContainer from './SearchContainer.js';


class Home extends Component {
  render() {
    return (
      <div>
      <h1>OMDB React</h1>
      <SearchContainer />
      </div>
    )
  }
}


export default Home
