import React, { Component } from 'react'



class Search extends Component{
  render(){
    return(
      <div className="col-sm-12">
      <form>
            <div className="form-group">
              <input
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
    )
  }
}



export default Search;
