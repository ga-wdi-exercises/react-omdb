var React = require('react');
var styles = require('../styles/index');

var Results = React.createClass({
  render: function () {
    console.log(this.props.results);
    return (
      <ul style={styles.noListStyle}>
        {this.props.results.map(function(result, index) {
          return (
            <li key={index}>
              <img src={result.Poster} />
              <p>{result.Title}</p>
            </li>
          )
        })}
      </ul>
    )
  }
});

module.exports = Results
