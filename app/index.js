// Bring in React and ReactDom
var React = require('react');
var ReactDOM = require("react-dom");

// Load Home Component
var Home = require("./components/Home");

// Render Home
ReactDOM.render(
  <Home />, // our component
  document.getElementById("app") // where to render
)
