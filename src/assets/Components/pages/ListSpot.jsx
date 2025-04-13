import React, { useState } from 'react';
import './ListSpot.css';

export default function ListSpot() {
  const [formData, setFormData] = useState({
    ownerName: '',
    location: '',
    availableFrom: '',
    availableTo: '',
    pricePerHour: '',
    contact: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Spot listed successfully!');
    console.log(formData);
    // send data to backend or database
  };

  return (
    <div className="list-spot-container">
      <form className="list-form" onSubmit={handleSubmit}>
        <h2>List Your Parking Spot</h2>

        <input
          type="text"
          name="ownerName"
          placeholder="Owner Name"
          value={formData.ownerName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Parking Location"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <label>Available From:</label>
        <input
          type="time"
          name="availableFrom"
          value={formData.availableFrom}
          onChange={handleChange}
          required
        />

        <label>Available To:</label>
        <input
          type="time"
          name="availableTo"
          value={formData.availableTo}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="pricePerHour"
          placeholder="Price per Hour (in ₹)"
          value={formData.pricePerHour}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit Spot</button>
      </form>
    </div>
  );
}
