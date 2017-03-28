import React, {Component} from 'react'
import Search from './Search'
import Results from './Results'

const movies = [
  {title: 'Fight Club', poster_url: 'https://s-media-cache-ak0.pinimg.com/originals/06/27/ed/0627edaeb7eda6d1659c43256f87821d.jpg'},
  {title: 'Shaun of the Dead', poster_url: 'http://img.moviepostershop.com/shaun-of-the-dead-movie-poster-2004-1020228593.jpg'}
]

class SearchContainer extends Component {
  constructor() {
    super()
    this.state = {
      hasSearched: false,
      query: ''
    }
  }

  change(e) {
    this.setState({
      query: e.target.value
    })
  }

  submit(e) {
    e.preventDefault()
    this.setState({
      query: '',
      hasSearched: true
    })
  }

  render() {
    if (this.state.hasSearched) {
      return <Results movies={movies} />
    } else {
      return (
        <Search
          change={e => this.change(e)}
          submit={e => this.submit(e)}
          query={this.state.query}
        />
      )
    }
  }
}

export default SearchContainer
