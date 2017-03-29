import React, {Component} from 'react'
import SearchContainer from './SearchContainer';

class MovieApp extends Component {
  render(){
    let searchComp =
      <SearchContainer />
    return(
      <div>
        <h1>OMDB App</h1>
        {searchComp}
      </div>
    )
  }
}

export default MovieApp
