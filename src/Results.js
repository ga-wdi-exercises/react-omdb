import React, {Component} from 'react'
import './Results.css'

class Results extends Component {
  render() {
    let movies = this.props.movies.map((movie, i) => {
      return (
        <div key={i}>
          <img src={movie.poster_url} alt={`${movie.title} poster`} />
          <p>{movie.title}</p>
        </div>
      )
    })
    return (
      <div>
        {movies}
      </div>
    )
  }
}

export default Results
