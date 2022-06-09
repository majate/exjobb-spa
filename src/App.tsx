import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <header className="App-header">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/p1">Page 1</Link>
          </li>
          <li>
            <Link to="/p2">Page 2</Link>
          </li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<p>Home</p>} />
        <Route path="p1" element={<p>Page 1</p>} />
        <Route path="p2" element={<p>Page 2</p>} />
      </Routes>
    </Router>
  )
}

export default App
