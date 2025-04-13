import React, { useState } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const [role, setRole] = useState('customer'); // 'customer' or 'provider'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password && role) {
      alert(`Registered as ${role}`);
      navigate('/login');
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <div className="register-container">
      <form className="register-box" onSubmit={handleSubmit}>
        <h2>Register for YesParking</h2>

        <div className="role-select">
          <label>
            <input
              type="radio"
              name="role"
              value="customer"
              checked={role === 'customer'}
              onChange={() => setRole('customer')}
            />
            I want to book parking
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="provider"
              checked={role === 'provider'}
              onChange={() => setRole('provider')}
            />
            I want to provide parking
          </label>
        </div>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Register</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
}
