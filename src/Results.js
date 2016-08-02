import React, {Component} from "react"
import styles from './styles/index'

class Results extends Component{
  render(){
    let {movies} = this.props
    let results = movies.map( (movie, index) => {
      return (
        <div key={index} style={styles.movie}>
          <img
            style={styles.posterThumb}
            src={movie.Poster}
            alt={movie.Title} />
          <p style={styles.textOverflow}>{movie.Title}</p>
        </div>
      )
    })

    return (
      <div style={styles.movies}>
        {results}
      </div>
    )
  }
}

export default Results
