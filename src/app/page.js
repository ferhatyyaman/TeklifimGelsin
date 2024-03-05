"use client";
import React from 'react';
import Login from '@/components/LoginForm';
import Layout from './layout';
import "./page.scss";


export default function Home() {
  return (
    <Layout>
    <div className='container'>
      <Login/>
    </div>
    </Layout>
  );
}
