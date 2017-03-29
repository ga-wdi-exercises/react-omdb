import React, { Component } from 'react';
import SearchContainer from "./SearchContainer"
import './Home.css';


class Home extends Component {

  render() {
return (
  <div className="jumbotron col-sm-12 text-center">
  <h1><a href="/">OMDB React</a></h1>
  <SearchContainer />
  </div>
)


}

}

export default Home;
