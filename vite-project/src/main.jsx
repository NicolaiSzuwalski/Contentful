import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const contentful = require("contentful")
const client = contentful.createClient({
  space: "qnii07g2cz43",
  accessToken: "ErgnWeXNJg9Nz6668FbzjPPTlSqKCYsb9hMzzz0ddIM",

});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App client={client}/>
  </React.StrictMode>,
)
