import React,{ Component } from 'react'
import styles from './index'

class Results extends Component{

  render(){
    let {movies} = this.props
    let results = movies.map( (movie, index) => {
      return (
        <div className="row s12">
        <div key={index} className='col-s6'>
        <img src={movie.Poster} alt={movie.Title} />
        <h3>{movie.Title}</h3>
        </div>
      </div>
      )
    })

    return (
      <div>
      { results }
      </div>
    )
  }
}

export default Results
