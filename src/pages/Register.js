import React from 'react'
import RegisterForm from '@/components/RegisterForm';
import ReduxProvider from '@/redux/app/provider';

export default function Register() {
    
  return (
    <div>
    <ReduxProvider>
    <RegisterForm/>
    </ReduxProvider>
  </div>
  )
}
