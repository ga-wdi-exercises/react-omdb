import React, { Component } from 'react';
import './App.css';
import Search from './Search.js';
import axios from 'axios';
import Movielist from './Movielist.js';

class Home extends Component {
  constructor(){
    super();
    this.state = {
      query: "Batman",
      currentMovies: []
    }
    this._newSearch = this._newSearch.bind(this);
    this._getRandomMovies = this._getRandomMovies.bind(this);
  }
  _newSearch(newQuery){
    this.setState({
      query: newQuery
    })
    let searchString = 'http://www.omdbapi.com/?s=' + newQuery;
    axios.get(searchString).then((data) => {
      let newMovies = data.data.Search;
      this.setState({currentMovies: newMovies})
    })
  }
  _getRandomMovies(){
    axios.get('http://www.omdbapi.com/?s=Batman').then((data) => {
      let newMovies = data.data.Search;
      this.setState({currentMovies: newMovies})
    })
  }
  componentDidMount(){
    this._getRandomMovies();
  }
  render() {
    return (
      <div className="App">
        <h1 className="title">Zaney Movie Search</h1>
        <Search newSearch={this._newSearch} />
        <h3>Currently searching for: {this.state.query}</h3>
        <Movielist movies={this.state.currentMovies} />
      </div>
    );
  }
}

export default Home;
