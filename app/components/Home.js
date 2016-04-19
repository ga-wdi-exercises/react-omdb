var React = require('react');
var styles = require("../styles/index");

var Search = require("./Search")

var Home = React.createClass({
  render: function () {
    return (
      <div className={"jumbotron col-sm-12 text-center"} style={styles.transparentBg}>
        <h1>React Omdb</h1>
        <Search />
      </div>
    )
  }
});

module.exports = Home;
