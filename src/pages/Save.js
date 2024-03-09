import CardSave from '@/components/CardSave'
import Header from '@/components/Header'
import ReduxProvider from '@/redux/app/provider'
import React from 'react'

export default function Save() {
  return (
    <div>
       <ReduxProvider>
          <Header/>
          <CardSave/>
       </ReduxProvider>
    </div>
  )
}
