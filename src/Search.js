import React, {Component} from 'react'

class Search extends Component {
  render(){
    return(
      <div>
        <form onSubmit={(e)=>this.props.submitQuery(e)} >
          <input type="search" value={this.props.query} placeholder="Which Movie Would You Like?" onChange={(e)=>this.props.changeQuery(e)}/>
          <br/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default Search
