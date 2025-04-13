import React, { useState } from 'react';
import './FindParking.css';

export default function FindParking() {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for parking at ${location} on ${date} at ${time}`);
    // You can fetch results from backend or database here
  };

  return (
    <div className="find-parking-container">
      <form className="search-box" onSubmit={handleSearch}>
        <h2>Find Parking Near You</h2>
        
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />

        <button type="submit">Find Parking</button>
      </form>

      <div className="results-placeholder">
        <h3>Available Parking Spaces</h3>
        <p>No data yet. Search to see results here.</p>
      </div>
    </div>
  );
}
