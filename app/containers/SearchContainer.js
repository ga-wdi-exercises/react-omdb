var React = require("react");
var Search = require("../components/Search");

var SearchContainer = React.createClass({
  getInitialState: function () {
    return {
      query: ""
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
      query: ""
    })
  },
  render: function () {
    return (
      <Search
        onSubmitSearch={this.handleSubmitSearch}
        onUpdateSearch={this.handleUpdateSearch}
        query={this.state.query} />
    )
  }
});

module.exports = SearchContainer;
