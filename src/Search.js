import React, { Component } from 'react'



class Search extends Component{
  constructor(props){
    super(props)
    this.state = {
      query: ''
    }
  }

  handleSearchInput(evt){
        this.setState({
          query: evt.target.value,
        })
      }

  handleSubmitQuery(evt){
    evt.preventDefault()
    console.log(this.state.query)
      }

  render(){

    return(
      <div className="col-sm-12">
      <form onSubmit={(evt) => this.handleSubmitQuery(evt)}>
            <div className="form-group">
              <input
              onChange={(evt) => this.handleSearchInput(evt)}
                value={this.state.query}
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
