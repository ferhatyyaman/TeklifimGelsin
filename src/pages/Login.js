import React from 'react'
import LoginForm from '@/components/LoginForm';

export default function Login({ history }) {
    const handleLogin = (userData) => {
        history.push('/factviewer');
      };
  return (
    <div>
    <LoginForm onLogin={handleLogin} />
  </div>
  )
}
