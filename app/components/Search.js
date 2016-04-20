var React = require("react");

var Search = React.createClass({
  // define our component's state when its rendered
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
      <div className="searchBox">
        <form onSubmit={this.handleSubmitSearch}>
          <input
            onChange={this.handleUpdateSearch}
            type="text"
            value={this.state.query}
            placeholder="Enter a Movie Title..." />
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
});

module.exports = Search;
