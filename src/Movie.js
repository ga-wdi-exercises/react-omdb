import React, { Component } from 'react';
import './App.css';

class Movie extends Component {
  render() {
    return (
        <div className="moviecontainer">
          <img src={this.props.imgurl} alt={this.props.title} />
          <h3>{this.props.title}</h3>
          <h4>Year released: {this.props.year}</h4>
        </div>
    );
  }
}

export default Movie;
