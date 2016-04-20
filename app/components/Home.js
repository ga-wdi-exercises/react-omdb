var React = require('react');
var Search = require("./Search"); // load in Search component

var Home = React.createClass({
  render: function () {
    return (
      <div className="container">
        <h1>React OMDB</h1>
        <Search />
      </div>
    )
  }
});

module.exports = Home;
