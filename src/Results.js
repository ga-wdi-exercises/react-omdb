import React, { Component } from 'react';
import './Results.css'

class Results extends Component {
  render() {
    return (
      <div className="movies">
        {this.props.results.map( (movie, i) => {
          return <div className="movie" key={i}>
            <h2>{movie.Title}</h2>
            <img src={movie.Poster} />
          </div>
        } )}
      </div>
    )
  }
}

export default Results
