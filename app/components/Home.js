var React = require('react');
var styles = require("../styles/index");

var SearchContainer = require("../containers/SearchContainer");

var Home = React.createClass({
  render: function () {
    return (
      <div className={"jumbotron col-sm-12 text-center"} style={styles.transparentBg}>
        <h1><a href="/">React Omdb</a></h1>
        <div className='col-sm-12' style={styles.space}>
          <SearchContainer />
        </div>
      </div>
    )
  }
});

module.exports = Home;
