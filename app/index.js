// Bring in React and ReactDom
import React, { PropTypes } from 'react'
import ReactDOM from "react-dom"
import styles from "./styles/index"


const queryOmdb = (query) => {
  let term = query.replace(/\s/, "+"); // replace any white space characters with a "+"
  let url = "http://omdbapi.com/?s=" + term;

  // fetch all movies matching the passed in title as JSON
  return $.getJSON(url).then((response) =>
    response["Search"]
  );
}

class SearchContainer extends React.Component{
  // define our Search component's state when its rendered
  constructor() {
    super();
    this.state = {
      query: "", // search query starts empty
      searched: false, // a user has not submitted a search by defualt
      results: [] // initialize an empty array for results
    }
  }
  // when ever search input is entered, change the state
  handleUpdateSearch(e) {
    this.setState({
      query: e.target.value // grab whatever's in the search input
    });
  }
  // when the user clicks search
  handleSubmitSearch(e) {
    e.preventDefault(); // prevent default page refresh
    console.log(this.state.query); // log the current value of the user's search
    // make ajax call
    queryOmdb(this.state.query).then((movies) => {
      console.log(movies);
      // redefine our app's state to include populated response
      this.setState({
        results: movies,
        query: "",
        searched: true // flip the switch
      })
    })
  }
  render() {
    if (this.state.searched) {
      return (
        <Results movies={this.state.results} />
      )
    }
    return (
      <Search
        onUpdateSearch={(event) => this.handleUpdateSearch(event)}
        onSubmitSearch={(event) => this.handleSubmitSearch(event)}
        query={this.state.query}
       />
    )
  }
};

class Search extends React.Component{
  render() {
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={styles.transparentBg}>
        <div className="col-sm-12">
          <form onSubmit={this.props.onSubmitSearch}>
            <div className="form-group">
              <input
                className="form-control"
                onChange={this.props.onUpdateSearch}
                type="text"
                value={this.props.query}
                placeholder="Enter a Movie Title..." />
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
              <button
                className="btn btn-block btn-primary"
                type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
};

Search.propTypes = {
  onUpdateSearch: PropTypes.func.isRequired,
  onSubmitSearch: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired
}

class Results extends React.Component{
  render() {
    return (
      <div style={styles.movies}>
        {this.props.movies.map((movie, index) => (
            <div style={styles.movie} key={index}>
              <img
                className="img-thumbnail"
                src={movie.Poster}
                style={styles.posterThumb} />
              <p style={styles.textOverflow}>{movie.Title}</p>
            </div>
          )
        )}
      </div>
    )
  }
};

class Home extends React.Component{
  render() {
    return (
      <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        <h1><a href="/">React OMDB</a></h1>
        <div className="col-sm-12" style={styles.space}>
          <SearchContainer />
        </div>
      </div>
    )
  }
};

// Render Home
ReactDOM.render(
  <Home />, // our component
  document.getElementById("app") // where to render
)
