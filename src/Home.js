// Developer TODO: Define App component defintion here
import React, {Component} from 'react'
import SearchContainer from './SearchContainer'

class Home extends Component {


  render(){
    return(
      <div>
        <h2>Movie App</h2>
        <br/>
        <SearchContainer />
      </div>
    )
  }
}


export default Home
