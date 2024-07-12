import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import EmployeesList from './pages/EmployeesList'
import './styles/index.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<EmployeesList />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
