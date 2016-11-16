// Developer TODO: Define App component defintion here
import React, {Component} from 'react'
import Search from "./Search.js"
import SearchContainer from './SearchContainer.js'
import Results from "./Results"
class HelloWorld extends Component {
  render() {
    return(
      <div>
        <h1>{this.props.greeting} </h1>
      </div>
    )
  }
}
class Home extends Component {
  render(){
    return(
      <div>
      <h1> React OMDB </h1>
      <SearchContainer />
      </div>
    )
  }
}
// if your component only has a render method you can re-write it as a function
// const HelloWorld = props => <h1> {props.greeting} </h1>
export default HelloWorld
export default Home
