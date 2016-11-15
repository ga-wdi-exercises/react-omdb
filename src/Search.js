import React, {Component} from "react"

class Search extends Component {
  submitQuery(evt){
    evt.preventDefault();
    console.log("submit!")
  }
  render() {
    return(
      <div className="searchBox">
        <form onSubmit={(evt) => this.submitQuery(evt)}>
          <input type="text" placeholder="Enter a movie title..."/>
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

 export default Search
