import React, { Component } from 'react'
import SearchContainer from './SearchContainer'
import styles from './index'

class Home extends Component {
  render() {
    return(
      <div className="text-center">
      <h1 className="header"><a href="/">MooVee Findr</a></h1>
      <SearchContainer />
      </div>
    )
  }
}
export default Home
