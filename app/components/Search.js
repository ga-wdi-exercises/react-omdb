var React = require("react");
var PropTypes = React.PropTypes;
var styles = require("../styles/index");

var Search = React.createClass({
  render: function () {
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

module.exports = Search;
