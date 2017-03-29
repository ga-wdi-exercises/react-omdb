import React, {Component} from "react"
import Search from "./Search"
import Results from "./Results"

let seedData = [{Title: "The GodFather",
Poster: "https://images-na.ssl-images-amazon.com/images/G/01/DVD/Paramount/detailpages/TheGodfather/GdfthrColl_Still_H5_L.jpg"
},
{
  Title: "The GodFather 2",
  Poster: "http://ourgoldenage.com.au/wp-content/uploads/2014/04/GAC_GodfatherII.png"
}]
console.log(seedData)
class SearchContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      query: '',
      hasSearched: false,
      movies: seedData,

    }
  }

  onSearchInput (evt) {
    this.setState({
      query: evt.target.value,
    })
  }

  handleToggleSearch (evt) {
    let hasSearched = !this.state.hasSearched
    this.setState(Object.assign(this.state, {hasSearched, }))
  }

  onSubmitQuery(evt){
    evt.preventDefault()
    this.setState({
      query: evt.target.value,
      hasSearched: true
    })

  }

  render(){
    if (this.state.hasSearched){
      return (
        <div>
        <button
        onClick={ evt => this.handleToggleSearch(evt) }
        className="btn btn-default">
        Search Again
        </button>
        <Results movies={this.state.movies} />
        </div>
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


export default SearchContainer
