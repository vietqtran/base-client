'use client'

import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import React from 'react'
import { persistor, store } from '@/store'

type Props = {
   children: React.ReactNode
}

const ReduxProvider = ({ children }: Props) => {
   return (
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
            {children}
         </PersistGate>
      </Provider>
   )
}

export default ReduxProvider
