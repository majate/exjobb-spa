import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'

function App() {
  const menuItems = [
    { name: 'Page 1', path: '/p1' },
    { name: 'Page 2', path: '/p2' },
  ]

  return (
    <Router>
      <Header title="EXJOBB" menuItems={menuItems} />
      <Routes>
        <Route path="/" element={<p>Home</p>} />
        <Route path="p1" element={<p>Page 1</p>} />
        <Route path="p2" element={<p>Page 2</p>} />
      </Routes>
    </Router>
  )
}

export default App
