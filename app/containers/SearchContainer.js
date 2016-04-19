var React = require("react");
var Search = require("../components/Search");
var Results = require("../components/Results");

var SearchContainer = React.createClass({
  results: [
    { title: "Star Wars", img_url: "http://fallmeeting.agu.org/2015/files/2015/12/Star-Wars.jpg" },
    { title: "Top Gun", img_url: "http://ecx.images-amazon.com/images/I/51YimkRDEjL._SY445_.jpg" }
  ],
  getInitialState: function () {
    return {
      query: "",
      searched: false
    }
  },
  handleUpdateSearch: function (e) {
    this.setState({
      query: e.target.value
    })
  },
  handleSubmitSearch: function (e) {
    e.preventDefault();

    console.log(this.state.query);
    this.setState({
      query: "",
      searched: true
    })
  },
  render: function () {
    if (this.state.searched) {
      return (
        <Results results={this.results} />
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
