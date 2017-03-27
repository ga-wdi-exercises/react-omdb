import React, {Component} from 'react'


class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      query: ''
    }
  }

  handleSubmit(e){
    e.preventDefault()
    console.log("clicked")
  }

  render(){
    return(
      <div className="searchBox">
      <form onSubmit={(e) => this.handleSubmit(e)}>
      <input type="text" placeholder="Search Movies"/>
      <button type='submit'>Search</button>
      </form>
      </div>
    )
  }
}


export default Search
