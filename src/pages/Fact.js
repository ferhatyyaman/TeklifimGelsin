import FactViewer from '@/components/FactViewer'
import Header from '@/components/Header'
import ReduxProvider from '@/redux/app/provider'
import React from 'react'

export default function Fact({ history }) {
  return (
    <ReduxProvider>
      <div>
      <Header/>
      <FactViewer/>
    </div>
  </ReduxProvider>
  )
}
