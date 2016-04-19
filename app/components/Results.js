var React = require('react');
var styles = require('../styles/index');

var Results = React.createClass({
  render: function () {
    console.log(this.props.movies);
    return (
      <div style={styles.movies}>
        {this.props.movies.map(function(movie, index) {
          return (
            <div style={styles.movie} key={index}>
              <img className="img-thumbnail" src={movie.posterUrl} style={styles.posterThumb} />
              <p style={styles.textOverflow}>{movie.Title}</p>
            </div>
          )
        })}
      </div>
    )
  }
});

module.exports = Results
