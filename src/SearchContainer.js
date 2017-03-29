import React, {Component} from "react"
import Search from "./Search.js"

class SearchContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      query :''
    }
  }
  handleSearchInput (event) {
   this.setState({
     query: event.target.value
   })
 }
   submitQuery(event){
   event.preventDefault()
   console.log(this.state.query)
 }

 render(){
     return (
       <Search
         handleSearchInput={ (event) => this.onSearchInput(event) }
         handleSubmitQuery={ (event) => this.onSubmitQuery(event) }
         query={this.state.query}
       />
     )
   }

}
export default SearchContainer
