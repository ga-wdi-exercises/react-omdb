import React, { Component } from "react"

class Results extends Component {
  constructor(props){
    super(props)
  }
  render(){
    let {movies} = this.props
    let result = movies.map( (movie, index) => {
      return (
        <div key={index}>
          <h3>{movie.title}</h3>
          <img src={movie.poster_url} alt={movie.title}/>
        </div>
      )
    })
    return (
      <div>{result}</div>
    )
  }
}

export default Results
