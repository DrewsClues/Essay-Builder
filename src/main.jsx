import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Persuasive from './components/persuasive.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from 'react-bootstrap'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Persuasive />
  </React.StrictMode>,
)
