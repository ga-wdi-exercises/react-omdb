import React, {Component} from 'react'
import Search from './Search'

class SearchContainer extends Component {

  constructor (props) {
    // make call to parent class' (Component) constructor
    super()
    // define an initial state
    this.state={
      searchString: "", // initialize search string
      movies: [{Title: "Batman", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg"}
                ,{Title: "Hello","Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BZGM5NjliODgtODVlOS00OWZmLWIzYzMtMTI2OWIzMTM1ZGRhXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",}],
      searchDone: false
    }
  }

  handleSearchChg(event) {
    this.setState({searchString: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({searchDone: true})
    console.log("searchString=",this.state.searchString)
  }


  render () {
    if (this.state.searchDone) {
    return (
      <div>
       <p>MOVIE RESULTS </p>
        <p> {this.state.movies[0].title} </p>
        </div>
    )
  }
  else {
    return(
      <Search
      searchString={this.state.searchString}
      onhandleSearchChg={ e => this.handleSearchChg(e)}
      onhandleSubmit={ e => this.handleSubmit(e)}
      moviematch={this.movies}
      />
    )
  }
  }
}
export default SearchContainer
