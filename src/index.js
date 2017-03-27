/*jshint esversion:6*/
// Developer TODO: Load in App component and render to the DOM
import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Home'
import './index.css'

ReactDOM.render(
  <Home className="container" />,
  document.getElementById('root')
)
