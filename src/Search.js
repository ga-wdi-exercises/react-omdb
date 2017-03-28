import React, {Component} from "react"
import styles from './index'

class Search extends Component {
  render(){
    let {handleSearchInput, handleSubmitQuery, query} = this.props
    return (
      <div className="jumbotron text-center">
        <form onSubmit={(evt) => handleSubmitQuery(evt)}>
          <div className="form-group">
          <input className="form-control"
          onChange={(evt) => handleSearchInput(evt)}
          value={query}
          type="text"
          placeholder="Enter a Movie Title..." />
        <br/>
        <button className="btn btn-primary" type="submit">Search</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Search
