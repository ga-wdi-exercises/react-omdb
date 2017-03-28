import React, {Component} from 'react'


class Search extends Component {

  render(){
    return(

      <div className="searchBox">
      <form onSubmit={(e) => this.props.handleSubmitQuery(e)} >
      <input type="text"
        
        onChange={(e) => this.props.handleSearchInput(e)}
        value={this.props.query}
        placeholder="Search Movies"/>

      <button type='submit' className=".btn btn-primary" >Search</button>

      </form>
      </div>
    )
  }
}


export default Search
