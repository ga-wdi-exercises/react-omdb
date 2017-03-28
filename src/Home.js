import React, { Component } from 'react';
import SearchContainer from './SearchContainer.js';


class Home extends Component {

  render(){
    return(
      <div>
        <h1> Welcome to OMDB </h1>
        <SearchContainer />
      </div>
    )
  }


}


export default Home;
