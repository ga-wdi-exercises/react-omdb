var React = require("react");
var Search = require("../components/Search");
var Results = require("../components/Results");
var queryOmdb = require("../utils/omdbHelpers.js").queryOmdb

var SearchContainer = React.createClass({
  getInitialState: function () {
    return {
      query: "",
      searched: false,
      results: []
    }
  },
  handleUpdateSearch: function (e) {
    this.setState({
      query: e.target.value
    })
  },
  handleSubmitSearch: function (e) {
    var self = this;
    e.preventDefault();
    // Use the user input to fetch results from OMDB
    queryOmdb(this.state.query)
    .then(function(data){
      self.setState({
        results: data,
        searched: true,
        query: ""
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
        onSubmitSearch={this.handleSubmitSearch}
        onUpdateSearch={this.handleUpdateSearch}
        query={this.state.query} />
    )
  }
});

module.exports = SearchContainer;
