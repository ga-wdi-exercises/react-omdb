import React, {Component} from "react"
import styles from './styles/index'

class Search extends Component {
  render(){
    let {handleSearchInput, handleSubmitQuery, query} = this.props
    return (
      <div style={styles.transparentBg} className="jumbotron col-sm-6 col-sm-offset-3 text-center">
        <div className="col-sm-12">
          <form onSubmit={(evt) => handleSubmitQuery(evt)}>
            <div className="form-group">
              <input
                onChange={(evt) => handleSearchInput(evt)}
                value={query}
                className="form-control"
                type="text"
                placeholder="Enter a Movie Title..." />
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
              <button
                className="btn btn-block btn-primary"
                type="submit">Search</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Search
