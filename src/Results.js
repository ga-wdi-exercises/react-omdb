import React, {Component} from "react"

class Results extends Component{


  render(){
    let {movies} = this.props
    let results = movies.map( (movie, index) => {
      return (
        <div key={index}>
          <img src={movie.Poster} alt={movie.Title} />
          <p>{movie.Title}</p>
        </div>
      )
    })

    return (
      <div>
        {results}
      </div>
    )
  }
}

export default Results
