var React = require("react");

var Search = React.createClass({
  render: function () {
    return (
      <div className="searchBox">
        <form onSubmit={this.props.onSubmitSearch}>
          <input
            onChange={this.props.onUpdateSearch}
            type="text"
            value={this.props.query}
            placeholder="Enter a Movie Title..." />
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
});

module.exports = Search;
