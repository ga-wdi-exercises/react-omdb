var React = require("react");
var styles = require("../styles/index");

var Search = React.createClass({
  getInitialState: function () {
    return {
      query: ""
    }
  },
  onUpdateSearch: function (e) {
    this.setState({
      query: e.target.value
    })
  },
  onSubmitSearch: function (e) {
    e.preventDefault();
    console.log(this.state.query);
    this.setState({
      query: ""
    })
  },
  render: function () {
    return (
      <div className='jumbotron col-sm-6 col-sm-offset-3 text-center' style={styles.transparentBg}>
        <div className="col-sm-12">
          <form onSubmit={this.onSubmitSearch}>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Enter a Movie Title..."
                onChange={this.onUpdateSearch}
                value={this.state.query}
                type="text" />
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

module.exports = Search;
