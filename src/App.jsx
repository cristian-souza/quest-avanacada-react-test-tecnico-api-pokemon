import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import Details from './pages/details'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeToggleProvider } from './components/theme-toggler/theme-toggler'

function App() {

  return (
    <ThemeToggleProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </Router>
    </ThemeToggleProvider>
  )
}

export default App
