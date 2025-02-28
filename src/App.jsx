import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/Components/pages/Home'
import About from './assets/Components/pages/About'
import Contact from './assets/Components/pages/Contact'
import NavBar from './assets/Components/pages/NavBar'


function App() {

  return (
    <>
      <div className="app">
        <div className="header">
          <NavBar />
        </div>
        <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
        <div className="footer">Footer</div>
      </div>
    </>
  )
}

export default App
