var React = require('react');
var SearchContainer = require("../containers/SearchContainer");

var Home = React.createClass({
  render: function () {
    return (
      <div className="container">
        <h1><a href="/">React OMDB</a></h1>
        <SearchContainer />
      </div>
    )
  }
});

module.exports = Home;
