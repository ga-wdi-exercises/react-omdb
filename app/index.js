// Bring in React and ReactDom
const React = require('react');
const ReactDOM = require("react-dom");
const PropTypes = React.PropTypes;
const styles = require("./styles/index");

function queryOmdb (query) {
  let term = query.replace(/\s/, "+"); // replace any white space characters with a "+"
  let url = "http://omdbapi.com/?s=" + term;

  // fetch all movies matching the passed in title as JSON
  return $.getJSON(url).then(function(response) {
    return response["Search"]
  });
}

const SearchContainer = React.createClass({
  // define our Search component's state when its rendered
  getInitialState() {
    return {
      query: "", // search query starts empty
      searched: false, // a user has not submitted a search by defualt
      results: [] // initialize an empty array for results
    }
  },
  // when ever search input is entered, change the state
  handleUpdateSearch(e) {
    this.setState({
      query: e.target.value // grab whatever's in the search input
    });
  },
  // when the user clicks search
  handleSubmitSearch(e) {
    const component = this; // cache reference to component's context
    e.preventDefault(); // prevent default page refresh
    console.log(this.state.query); // log the current value of the user's search
    // make ajax call
    queryOmdb(this.state.query).then(function(movies) {
      console.log(movies);
      // redefine our app's state to include populated response
      component.setState({
        results: movies,
        query: "",
        searched: true // flip the switch
      })
    })
  },
  render() {
    if (this.state.searched) {
      return (
        <Results movies={this.state.results} />
      )
    }
    return (
      <Search
        onUpdateSearch={this.handleUpdateSearch}
        onSubmitSearch={this.handleSubmitSearch}
        query={this.state.query}
       />
    )
  }
});

const Search = React.createClass({
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
});

Search.propTypes = {
  onUpdateSearch: PropTypes.func.isRequired,
  onSubmitSearch: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired
}

const Results = React.createClass({
  render() {
    return (
      <div style={styles.movies}>
        {this.props.movies.map(function(movie, index) {
          return (
            <div style={styles.movie} key={index}>
              <img
                className="img-thumbnail"
                src={movie.Poster}
                style={styles.posterThumb} />
              <p style={styles.textOverflow}>{movie.Title}</p>
            </div>
          )
        })}
      </div>
    )
  }
});

const Home = React.createClass({
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
});

// Render Home
ReactDOM.render(
  <Home />, // our component
  document.getElementById("app") // where to render
)
