import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const FormController = React.lazy(() => import('./components/FormController'))
const Header = React.lazy(() => import('./components/Header'))

function App() {
  const menuItems = [
    { name: 'Form', path: '/form' },
    { name: 'Page 2', path: '/p2' },
  ]

  return (
    <Router>
      <Suspense fallback={null}>
        <Header title="EXJOBB" titlePath="/" menuItems={menuItems} />
      </Suspense>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<p>Home</p>} />
          <Route path="form" element={<FormController />} />
          <Route path="p2" element={<p>Page 2</p>} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
