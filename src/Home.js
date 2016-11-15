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
      <Search/>
      <div>Hello World Step 2</div>
      </div>
    )
  }
}

export default Hello
