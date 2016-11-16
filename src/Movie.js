import React, { Component } from 'react';
import './App.css';

class Movie extends Component {

  render() {
    var imgVisibility = "";
    if (this.props.imgurl === 'N/A') {
      imgVisibility = "hiddenmovie";
    } else {
      imgVisibility = "";
    }
    return (
        <div className="moviecontainer">
          <img src={this.props.imgurl} className={imgVisibility} alt={this.props.title} />
          <h3 className="movietitle">{this.props.title}</h3>
          <h4>Year released: {this.props.year}</h4>
        </div>
    );
  }
}

export default Movie;
