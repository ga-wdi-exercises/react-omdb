// Developer TODO: Load in App component and render to the DOM
import React from 'react'
import ReactDOM from 'react-dom'
import HelloWorld from './Home.js'
import Home from "./Home.js"
// collection = [{title: "Batman", poster:"https://upload.wikimedia.org/wikipedia/en/1/17/Batman-BenAffleck.jpg"}, {title:"The Flash", poster:"http://static.srcdn.com/wp-content/uploads/flash-movie-director-writer-grahame-smith.jpg"}]

ReactDOM.render(
  <Home  />,

  document.getElementById("root")
)
