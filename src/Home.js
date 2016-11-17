// Developer TODO: Define App component defintion here
import React, { Component } from 'react';
import SearchContainer from "./SearchContainer"


class Home extends Component {
  render() {
    return (
      <div>
        <h1><a href="/">OMDB React</a></h1>
        <div>
          <SearchContainer />
        </div>
      </div>
    );
  }
}

export default Home;
