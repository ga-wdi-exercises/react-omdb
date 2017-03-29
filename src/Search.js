import React, {Component} from "react"
import  "./Search.css"

 class Search extends Component {

   render(){
      let {handleSearchInput, handleSubmitQuery, query} = this.props
     return (
       <div class="hide">
         
           <form onSubmit={(event) => handleSubmitQuery(event)}>
           <input
             onChange={(event) => handleSearchInput(event)}
               value={query}
        type="text"
        placeholder="Enter a Movie Title..." />
           <button type="submit">Search</button>
         </form>
       </div>
     )
   }
 }

 export default Search
