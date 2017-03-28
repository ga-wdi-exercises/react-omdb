import React, {Component} from 'react'

class Results extends Component {

render(){
  let {movies} = this.props
  let results = movies.map( (movie, index) =>{
    return(
      <div key={index} className="resultsContainer">

        <img src={movie.Poster} alt={movie.Title} />
        <h3> {movie.Title} </h3>
      
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
