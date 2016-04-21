var React = require("react");
var Search = require("../components/Search");
var Results = require("../components/Results");
var queryOmdb = require("../utils/OmdbHelpers").queryOmdb;

var SearchContainer = React.createClass({
  // define our Search component's state when its rendered
  getInitialState: function () {
    return {
      query: "", // search query starts empty
      searched: false, // a user has not submitted a search by defualt
      results: [] // initialize an empty array for results
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
    var component = this; // cache reference to component's context
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
  render: function () {
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

module.exports = SearchContainer;
