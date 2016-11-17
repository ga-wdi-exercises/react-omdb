import React, {Component} from 'react'

class Results extends Component {
      render(){
        let {movie} = this.props
        let results = this.movie.results.map((movie, i) =>{
          // movieTitle
          // moviePoster
        })
        return(
          <div>
          src={props.moviePoster}
          alt={props.movieTitle}
          </div>
        )
      }
    }

export default Results
