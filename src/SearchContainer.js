import React, {Component} from 'react'
import Search from './Search'
import Results from './Results'


class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: "",
      submit: false
    }
  }

  handleSearchInput(e) {
    this.setState({
      query: e.target.value,
    })
  }

  handleSubmitQuery(e) {
    e.preventDefault()
    this.setState({
      submit: true
    })
  }

  render() {
    if (!this.state.submit) {
    return(<Search
        query={this.state.query}
        onSearchSubmit={ e => this.handleSubmitQuery(e)}
        onSearchInput={ e => this.handleSearchInput(e)}
        />)
      } else {
      return(<Results
        query={this.state.query}
        />)
    }

  }
}

export default SearchContainer
