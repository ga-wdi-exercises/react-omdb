import React, {Component} from 'react'
import Search from './Search'
import Results from './Results'

class SearchContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchQuery: '',
      hasSearched: false
    }
  }
  search(e){
    e.preventDefault()
    console.log(this.state.searchQuery)
    this.setState({
      searchQuery:'',
      hasSearched: true
    })
  }
  changeSearch(e){
    this.setState({searchQuery: e.target.value})
  }
  render(){
    let movies = [
      {title: "Star Wars", poster_url: "http://fallmeeting.agu.org/2015/files/2015/12/Star-Wars.jpg"},
      {title: "Top Gun", poster_url: "http://ecx.images-amazon.com/images/I/51YimkRDEjL._SY445_.jpg"}
    ]
    if(this.state.hasSearched){
      return (
        <Results movies = {movies}/>
      )
    } else {

    }
    return(
      <div>
        <Search query={this.state.searchQuery} submitQuery={(e)=>this.search(e)} changeQuery={(e)=> this.changeSearch(e)}/>
      </div>
    )
  }
}

export default SearchContainer
