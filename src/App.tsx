import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FormController from './components/FormController'
import Header from './components/Header'

function App() {
  const menuItems = [
    { name: 'Form', path: '/form' },
    { name: 'Page 2', path: '/p2' },
  ]

  return (
    <Router>
      <Header title="EXJOBB" titlePath="/" menuItems={menuItems} />
      <Routes>
        <Route path="/" element={<p>Home</p>} />
        <Route path="form" element={<FormController />} />
        <Route path="p2" element={<p>Page 2</p>} />
      </Routes>
    </Router>
  )
}

export default App
