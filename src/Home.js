            // ####################################
            // 201703282333L   EL MARTES   JAY
import React, { Component } from 'react';
import SearchContainer from './SearchContainer';

// class HelloWorld extends Component {
class Home extends Component {
  render() {
    return(
      <div>
          <h1><a href='/'>OMDB React          </a></h1>
          <h1>            Welcome to Move eHub    </h1>
          <SearchContainer />
      </div>
    )
  }
}
export default Home
