var React = require("react");

var Results = React.createClass({
  render: function () {
    return (
      <div>
        {this.props.movies.map(function(movie, index) {
          return (
            <div key={index}>
              <img src={movie.poster_url} />
              <p>{movie.title}</p>
            </div>
          )
        })}
      </div>
    )
  }
});

module.exports = Results;
