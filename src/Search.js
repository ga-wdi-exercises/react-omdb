import React, {Component} from 'react'


class Search extends Component {

  render () {
    return (
      <form onSubmit={(e)=> this.props.onhandleSubmit(e)}>
      <input type="text"  placeholder="Movie Search" value={this.props.SearchString} onChange={(e)=> this.props.onhandleSearchChg(e)} />
      <input type="submit"  />
      </form>

    )
  }
}

export default Search
