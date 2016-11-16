import React from 'react'

const Search = props => {
    return (
      <form>
        <input type="text" value={props.query} onChange={event => {props.onChange(event)}}/>
        <button type="submit" onClick={event => props.onClick(event)}>Search</button>
      </form>
    )
  }


export default Search
