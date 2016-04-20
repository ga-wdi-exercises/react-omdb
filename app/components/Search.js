var React = require("react");
var PropTypes = React.PropTypes;

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

Search.propTypes = {
  onUpdateSearch: PropTypes.func.isRequired,
  onSubmitSearch: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired
}

module.exports = Search;
