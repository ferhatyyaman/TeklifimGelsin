import React, { useState } from 'react';
import  '../../styles/RegisterForm.scss';
import { useRouter } from 'next/router';

import { useDispatch } from 'react-redux';

import { createUser } from '../redux/features/userSlice';
import Link from 'next/link';

export default function RegisterForm({ onRegister }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch();
    const router = useRouter();

    const handleFormSubmit = (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
          alert("Passwords don't match");
          return;
      }
      dispatch(createUser({ username, password }));
      router.push('/');
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
      <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="inputField" />
      <button type="submit" className="submitButton">Register</button>
      <Link href="/" className="linkContainer">Login</Link> 
    </form>
  </div>
  );
};