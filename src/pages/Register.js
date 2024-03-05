import React from 'react'
import RegisterForm from '@/components/RegisterForm';

export default function Register({ history }) {
    const handleRegister = (userData) => {
        history.push('/Login');
      };
  return (
    <div>
    <RegisterForm onRegister={handleRegister} />
  </div>
  )
}
