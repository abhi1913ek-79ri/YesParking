import React ,{useState}from 'react'
import { NavLink } from 'react-router-dom'
import{Link} from 'react-router-dom'
import './NavBar.css'
import logo from '../../../assets/menu.svg'


export default function NavBar() {
  const [openMenu,setOpenMenu]=useState(false);
  return (
    <nav className='navbar '>
        <Link  id="brand" to="/">YesParking</Link>
        <div className="menu" onClick={()=>{openMenu?setOpenMenu(false):setOpenMenu(true)}}>
          <img src={logo} alt="menu" height={{height:"50rem"}}/>
        </div>
      <ul className={openMenu?"open":""}>
        <li><NavLink to="/booking">Booking</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
      </ul>
    </nav>
  )
}
