import React, {Component} from 'react'

class Search extends Component {
  constructor() {
    super()
    this.state = {
      query: ''
    }
  }

  change(e) {
    this.setState({
      query: e.target.value
    })
  }

  submit(e) {
    e.preventDefault()
    console.log(this.state.query)
  }

  render() {
    return (
      <form onSubmit={e => this.submit(e)}>
        <input type="text" placeholder="search" onChange={e => this.change(e)} />
        <button type="submit">Search</button>
      </form>
    )
  }
}

export default Search
