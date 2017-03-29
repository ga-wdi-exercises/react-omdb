import React, {Component} from "react"
import Search from "./Search"
import Results from "./Results"

class SearchContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      query: '',
      hasSearched: false
    }
  }

  onSearchInput (evt) {
    this.setState({
      query: evt.target.value
    })
  }

  onSubmitQuery(evt){
    evt.preventDefault();
    console.log(this.state.query)
    this.setState({
      query: '',
      hasSearched: true
    })
  }

  render(){
    let movies = [
          {title: "Ironman 2", poster_url: "http://www.impawards.com/2010/posters/iron_man_two_ver6.jpg"},
          {title: "Batman VS Superman", poster_url: "http://cdn2-www.comingsoon.net/assets/uploads/gallery/batman-v-superman-dawn-of-justice-1400694960/batmanvsupermanposter.jpgg"}
        ]

        if(this.state.hasSearched){
          return(
            <Results movies={movies} />
          )
        } else {
          return (
            <Search
            handleSearchInput={ (evt) => this.onSearchInput(evt) }
            handleSubmitQuery={ (evt) => this.onSubmitQuery(evt) }
            query={this.state.query}
            />
          )
        }
      }
}

export default SearchContainer
