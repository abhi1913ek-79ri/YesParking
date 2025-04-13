import React from 'react';
import './Home.css'; // Custom CSS
import heroImage from '../../../assets/images/hero-image.png'; // Example image path
import { Link } from 'react-router-dom';

const Home= () => {
  return (
    <div className="home">
      {/* Navbar */}
      {/* Hero Section */}
      <main className="hero">
        <div className="hero-text">
          <h2>Find or Share Parking Effortlessly</h2>
          <p>With YesParking, book parking in seconds or earn by listing your space.</p>
          <div className="hero-buttons">
            <button className="btn-primary "><Link className='findParking-btn' to="/findParking">Find Parking</Link></button>
            <button className="btn-outline"><Link className='listSpot' to="/listSpot">List Your Spot</Link></button>
          </div>
        </div>
        <img
          src={heroImage}
          alt="Parking Illustration"
          className="hero-image"
        />
      </main>
    </div>
  );
};

export default Home;
