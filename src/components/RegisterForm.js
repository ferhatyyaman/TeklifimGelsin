import React, { useState } from 'react';
import  '../../styles/RegisterForm.scss'
import Link from 'next/link';

export default function RegisterForm({ onRegister }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
     
      onRegister({ username, password });
    };
  return (
  <div className="div-container">
      <h1>Useless Fact</h1>
    <form onSubmit={handleFormSubmit} className="formContainer">
      <div className="title">
        <h2>Register</h2>
      </div>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="inputField"/>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="inputField"/>
      <button type="submit" className="submitButton">Register</button>
      <Link href="/" className="linkContainer">Login</Link> 
    </form>
  </div>
  );
};