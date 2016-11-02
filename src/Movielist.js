import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

class Movielist extends Component {
  render() {
    return (
      <div className="movielistcontainer">
        {this.props.movies.map((movie, index) => <Movie title={movie.Title} year={movie.Year} imgurl={movie.Poster} key={index} />)}
      </div>
    );
  }
}

export default Movielist;
