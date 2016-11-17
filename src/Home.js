import React, {Component} from 'react';
import SearchContainer from "./SearchContainer"
import Results from "./Results"



// const HelloWorld = props => <h1>Hello Tim</h1>

class Hello extends Component {
  render () {
    return (
      <h1>Hello {this.props.name}</h1>
    )
  }
}

class Home extends Component {
  render () {
    return (
      <div>
      <h1><a href="/">OMDB React</a></h1>
      <SearchContainer/>
      </div>
    )
  }
}



export default Hello
export default Home
