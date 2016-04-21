var React = require("react");
var Search = require("../components/Search");
var Results = require("../components/Results");

var SearchContainer = React.createClass({
  // define our Search component's state when its rendered
  getInitialState: function () {
    return {
      query: "", // search query starts empty
      searched: false // a user has not submitted a search by defualt
    }
  },
  // when ever search input is entered, change the state
  handleUpdateSearch: function (e) {
    this.setState({
      query: e.target.value // grab whatever's in the search input
    });
  },
  // when the user clicks search
  handleSubmitSearch: function (e) {
    e.preventDefault(); // prevent default page refresh
    console.log(this.state.query); // log the current value of the user's search
    this.setState({
      query: "", // clear the search
      searched: true
    });
  },
  render: function () {
    var movies = [
      {title: "Star Wars", poster_url: "http://fallmeeting.agu.org/2015/files/2015/12/Star-Wars.jpg"},
      {title: "Top Gun", poster_url: "http://ecx.images-amazon.com/images/I/51YimkRDEjL._SY445_.jpg"}
    ]
    if (this.state.searched) {
      return (
        <Results movies={movies} />
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

module.exports = SearchContainer;
