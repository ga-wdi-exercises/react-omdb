import React, { Component } from 'react'

class Results extends Component {
  render() {
    let {movies} = this.props
    let results= movies.map( (movie, i) => {
      return(
        <div key={i}>
          <img src={movie.poster_url} alt={movie.title} />
          <p>{movie.title}</p>
        </div>
      )
    })

    return(
      <div>
        {results}
      </div>
    )
  }
}

export default Results
