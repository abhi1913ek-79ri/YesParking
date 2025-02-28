import { useState ,useEffect} from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/Components/pages/Home'
import About from './assets/Components/pages/About'
import Contact from './assets/Components/pages/Contact'
import NavBar from './assets/Components/pages/NavBar'
import Footer from './Footer'
import Booking from './assets/Components/pages/Booking'


function App() {
  const [title, setTitle] = useState("Yes Parking | Home");

  
  useEffect(() => {
    document.title = title; // Dynamically set title
  }, [title]); // Runs when title changes
  return (
    <>
      <div className="app">
        <div className="header">
          <NavBar />
        </div>
        <div className="main">
        <Routes>
          <Route path="/" element={<Home title={title} setTitle={setTitle} />} />
          <Route path="/booking" element={<Booking title={title} setTitle={setTitle} />} />
          <Route path="/about" element={<About title={title} setTitle={setTitle} />} />
          <Route path="/contact" element={<Contact title={title} setTitle={setTitle} />} />
        </Routes>
        </div>
        <div className="footer"><Footer /></div>
      </div>
    </>
  )
}

export default App;
