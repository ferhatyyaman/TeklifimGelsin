import React, { useState } from 'react';
import Link from 'next/link';
import "../../styles/LoginForm.scss"

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      onLogin({ username, password });
    };
  return (
 <div className="div-container">
          <h1>Useless Fact</h1>
      <form onSubmit={handleFormSubmit} className="formContainer"> 
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="inputField" />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="inputField"  />
      <button type="submit" className="submitButton">Login</button>
      <Link href="/Fact" className="linkContainer">Fact</Link>
      <Link href="/Register" className="linkContainer">Register</Link> 
      </form>
 </div>
  )
}
