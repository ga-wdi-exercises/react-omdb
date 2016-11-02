import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

class Movielist extends Component {
  render() {
    return (
      <div>
        {this.props.movies.map((movie, index) => <Movie title={movie.title} year={movie.year} imgurl={movie.imgurl} key={index} />)}
      </div>
    );
  }
}

export default Movielist;
