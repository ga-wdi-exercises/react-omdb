import React, {Component} from 'react'


class Search extends Component {

  render () {
    return (
      <div>
      <form onSubmit={(e)=> this.props.onhandleSubmit(e)}>
      <input type="text"  placeholder="Movie Search" value={this.props.SearchString} onChange={(e)=> this.props.onhandleSearchChg(e)} />
      <input type="submit"  />
      <p> {this.props.searchString} </p>
      </form>
      <p> {this.props.movies} </p>
      </div>
    )
  }
}

export default Search
