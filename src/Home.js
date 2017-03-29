import React, {Component} from 'react';
import Search from "./Search.js"
import SearchContainer from "./SearchContainer.js"

  class Home extends Component {
    render() {
      return (
        <div>
          <h1>OMDB </h1>
          
          <SearchContainer />
        </div>
      )
    }
}

export default Home
