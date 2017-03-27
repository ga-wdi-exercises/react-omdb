// Developer TODO: Define App component defintion here
import React, {Component} from 'react'
import Search from './Search'

class Home extends Component {


  render(){
    return(
      <div>
        <h2>Movie App</h2>
        <Search />
      </div>
    )
  }
}


export default Home
