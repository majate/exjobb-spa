import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const FormController = React.lazy(() => import('./components/FormController'))
const FeedPage = React.lazy(() => import('./components/FeedPage'))
const Header = React.lazy(() => import('./components/Header'))
const Home = React.lazy(() => import('./components/Home'))

function App() {
  const menuItems = [
    { name: 'Form', path: '/form' },
    { name: 'Feed', path: '/feed' },
  ]

  return (
    <Router>
      <Suspense fallback={null}>
        <Header title="EXJOBB" titlePath="/" menuItems={menuItems} />
      </Suspense>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="form" element={<FormController />} />
          <Route path="feed" element={<FeedPage />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
