import { useState ,useEffect} from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/Components/pages/Home'
import About from './assets/Components/pages/About'
import Contact from './assets/Components/pages/Contact'
import NavBar from './assets/Components/pages/NavBar'
import Footer from './Footer'
import FindParking from './assets/Components/pages/FindParking'
import Login from './assets/Components/pages/Login'
import Register from './assets/Components/pages/Register'
import ListSpot from './assets/Components/pages/ListSpot'


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
          <Route path="/findParking" element={<FindParking title={title} setTitle={setTitle} />} />
          <Route path="/login" element={<Login title={title} setTitle={setTitle} />} />
          <Route path="/register" element={<Register title={title} setTitle={setTitle}/>} />
          <Route path="/about" element={<About title={title} setTitle={setTitle} />} />
          <Route path="/contact" element={<Contact title={title} setTitle={setTitle} />} />
          <Route path="/listSpot" element={<ListSpot title={title} setTitle={setTitle}/>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        </div>
        <div className="footer"><Footer /></div>
      </div>
    </>
  )
}

export default App;
