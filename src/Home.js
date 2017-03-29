import React, { Component } from 'react';
import SearchContainer from './SearchContainer';

class HelloWorld extends Component {
  render() {
    return(
      <div>
      <h1><a href='/'>OMDB React</a></h1>
      <SearchContainer />
      </div>
    )
  }
}

export default HelloWorld
