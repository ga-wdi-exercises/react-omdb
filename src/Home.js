import React, {Component} from "react"
import SearchContainer from "./SearchContainer.js"

//if it is only a render , you can just define it in a variable
const HelloWorld = props => <h1>Hola {props.name}</h1>

class Home extends Component{
  render(){
    return(
      <div>
        <h1>Welcome Boiiii</h1>
        <SearchContainer />
      </div>
    )
  }
}


export default Home
