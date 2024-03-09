import React, { useState } from 'react';
import Link from 'next/link';
import "../../styles/LoginForm.scss"
import { useDispatch } from 'react-redux';
import { authenticateUser } from '@/redux/features/authSlice';
import { loginUser } from '@/redux/features/userSlice';
import { useRouter } from 'next/navigation'

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
  
    const router = useRouter();

    const handleFormSubmit = (e) => {
      console.log("basıldı")
      e.preventDefault();
      if (username === 'admin' && password === '12345') {
        dispatch(loginUser({ username }));
        dispatch(authenticateUser());
        router.push('/Fact');
      } else {
        alert('Invalid username or password');
      }
    };
  
  return (
 <div className="div-container">
          <h1>Useless Fact</h1>
      <form onSubmit={handleFormSubmit} className="formContainer"> 
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="inputField" />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="inputField"  />
      <button type="submit" className="submitButton">Login</button>
      <Link href="/Register" className="linkContainer">Create Account</Link> 
      </form>
 </div>
  )
}
