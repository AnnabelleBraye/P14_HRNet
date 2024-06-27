import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import './styles/index.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
