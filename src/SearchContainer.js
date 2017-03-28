import React, {Component} from 'react'
import Search from './Search'

class SearchContainer extends Component {
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
      <Search
        change={e => this.change(e)}
        submit={e => this.submit(e)}
      />
    )
  }
}

export default SearchContainer
