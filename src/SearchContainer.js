import React from 'react';
import Search from './Search'

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
  }
  onSearchInput (evt) {
    this.setState({
      query: evt.target.value
    })
  }
  onSubmitQuery(evt) {
    evt.preventDefault(); //not completely clear on the prevent default, requires more research.
    console.log(this.state.query)
    this.setState({
      query: ''
    })
  }

  render() {
    return (
      <Search //define handleSearchInput and handleSubmitQuery
      handleSearchInput={ (evt) => this.onSearchInput(evt)}
      handleSubmitQuery={ (evt) => this.onSubmitQuery(evt)}
      //define query
      query={this.state.query}
      />
    )
  }
}

//don't forget to export
export default SearchContainer
