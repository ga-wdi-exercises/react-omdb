var React = require("react");
var Search = require("../components/Search");

var SearchContainer = React.createClass({
  // define our Search component's state when its rendered
  getInitialState: function () {
    return {
      query: "" // search query starts empty
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
      query: "" // clear the search
    });
  },
  render: function () {
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
