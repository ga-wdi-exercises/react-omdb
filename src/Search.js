import React, {Component} from "react"

class Search extends Component {
  submitQuery(evt){
    evt.preventDefault();
    console.log("submitted");
  }
  render(){
    return (
      <div className="searchBox">
        <form onSubmit={(evt) => this.submitQuery(evt)}>
          <input type="text" placeholder="Enter a Movie Title..." />
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default Search
