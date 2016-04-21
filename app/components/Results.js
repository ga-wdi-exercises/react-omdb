var React = require("react");

var Results = React.createClass({
  render: function () {
    return (
      <div>
        {this.props.movies.map(function(movie, index) {
          return (
            <div key={index}>
              <img src={movie.Poster} />
              <p>{movie.Title}</p>
            </div>
          )
        })}
      </div>
    )
  }
});

module.exports = Results;
