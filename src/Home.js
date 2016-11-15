// Developer TODO: Define App component defintion here
// bring in React and Component instance from react
import React, {Component} from 'react'
import Search from './Search'

// define our Hello component
class Hello extends Component {
  // what should the component render
  render () {
    // Make sure to return some UI
    return (
      <div>

      <div id="title" >OMDB Movies</div>
      <Search/>
      </div>
    )
  }
}

export default Hello
