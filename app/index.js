// Bring in React and ReactDom
var React = require('react');
var ReactDOM = require("react-dom");

// Load HelloWorld Component
var HelloWorld = require("./components/HelloWorld");

// Render HelloWorld
ReactDOM.render(
  <HelloWorld />, // our component
  document.getElementById("app") // where to render
)
