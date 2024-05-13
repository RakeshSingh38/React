import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//  ReactDOM.createRoot(document.getElementById('root'));
// root.render(
const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
