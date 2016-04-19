var React = require('react');
var styles = require('../styles/index');

var Results = React.createClass({
  render: function () {
    return (
      <ul style={styles.noListStyle}>
        {this.props.results.map(function(result, index) {
          return (
            <li key={index}>
              <img src={result.img_url} />
              <p>{result.title}</p>
            </li>
          )
        })}
      </ul>
    )
  }
});

module.exports = Results
