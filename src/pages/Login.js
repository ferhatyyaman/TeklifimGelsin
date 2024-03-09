import React from 'react'
import LoginForm from '@/components/LoginForm';
import ReduxProvider from '@/redux/app/provider';

export default function Login() {
    
  return (
    <div>
    <ReduxProvider>
    <LoginForm />
    </ReduxProvider>
  </div>
  )
}
