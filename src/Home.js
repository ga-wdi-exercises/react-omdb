import React, {Component} from 'react'
import Search from './SearchContainer'

class Home extends Component{
  render(){
    return(
      <div className="main-container">
        <h1>React OMDB</h1>
        <Search />
      </div>
    )
  }
}

export default Home;
