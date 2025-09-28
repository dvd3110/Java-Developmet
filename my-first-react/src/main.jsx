import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'

function MyApp() {
  return (
    <div>
      <h1>This is custom Appp</h1>
    </div>
  )
}

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google Page</a>
)

const reactElement = React.createElement(
  'a', {
  href: 'https://google.com', target: '_blank'
},
  'Click me to visit google...'
)


createRoot(document.getElementById('root')).render(
  <App />
)
