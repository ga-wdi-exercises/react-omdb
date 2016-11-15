import React, {Component} from "react"
import Search from "./Search"
import Results from "./Results"

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ' ',
      hasSearched: false,
    }
  }

  onSearchInput (evt) {
    this.setState({
      query: evt.target.value,
    })
  }

  onSubmitQuery(evt){
    evt.preventDefault();
    console.log(this.state.query)
    this.setState({
      query: ' ',
      hasSearched: true,
    })
  }

  render(){
      let movies = [
        {title: "Star Wars", poster_url: "http://fallmeeting.agu.org/2015/files/2015/12/Star-Wars.jpg"},
        {title: "Top Gun", poster_url: "http://ecx.images-amazon.com/images/I/51YimkRDEjL._SY445_.jpg"}
      ]
      if (this.state.hasSearched){
        return (
          <Results movies={movies} />
        )
      } else {
        return  (
          <Search
          handleSearchInput={ (evt) => this.onSearchInput(evt) }
          handleSubmitQuery={ (evt) => this.onSubmitQuery(evt) }
          query={this.state.query} />
        )
      }
    }
  }

  export default SearchContainer;
