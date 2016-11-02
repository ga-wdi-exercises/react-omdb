import React, { Component } from 'react';
import './App.css';
import Search from './Search.js';
import Movielist from './Movielist.js';

class Home extends Component {
  constructor(){
    super();
    this.state = {
      query: "",
      currentMovies: [
        {
          title: "Batman: Gotham Knight",
          year: "2008",
          imgurl: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ1NjExODcyNl5BMl5BanBnXkFtZTcwMTk0MDc4MQ@@._V1_SX300.jpg",
        },
        {
          title: "Batman: Gotham Knight",
          year: "2008",
          imgurl: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ1NjExODcyNl5BMl5BanBnXkFtZTcwMTk0MDc4MQ@@._V1_SX300.jpg",
        },
        {
          title: "Batman: Gotham Knight",
          year: "2008",
          imgurl: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ1NjExODcyNl5BMl5BanBnXkFtZTcwMTk0MDc4MQ@@._V1_SX300.jpg",
        },
      ]
    }
    this._newSearch = this._newSearch.bind(this);
  }
  _newSearch(newQuery){
    this.setState({
      query: newQuery
    })
  }
  render() {
    return (
      <div className="App">
        <Search newSearch={this._newSearch} />
        <h3>Currently searching for: {this.state.query}</h3>
        <Movielist movies={this.state.currentMovies} />
      </div>
    );
  }
}

export default Home;
