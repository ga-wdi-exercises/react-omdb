var React = require('react');
var styles = require("../styles/index");

var SearchContainer = require("../containers/SearchContainer");

var Home = React.createClass({
  render: function () {
    return (
      <div className={"jumbotron col-sm-12 text-center"} style={styles.transparentBg}>
        <h1>React Omdb</h1>
        <SearchContainer />
      </div>
    )
  }
});

module.exports = Home;
